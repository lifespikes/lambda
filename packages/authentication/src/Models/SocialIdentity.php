<?php

namespace Lambda\Authentication\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Lambda\Authentication\Exceptions\IdentityInUseException;
use Lambda\Contracts\Authentication\SocialIdentity as SocialIdentityContract;
use Lambda\Contracts\Authentication\SocialRepository;
use Laravel\Socialite\Contracts\User as SocialiteUser;
use RuntimeException;

class SocialIdentity implements SocialIdentityContract
{
    protected ?Identity $record = null;

    public function __construct(
        protected SocialRepository $provider,
        protected UserProvider $users,
        protected Identity $model
    ) {
        $this->record = ($socialite = $this->socialite()) ? $this->model->where([
            'provider_name' => $this->provider->name(),
            'provider_id' => $socialite->getId(),
        ])->first() : null;
    }

    private function socialite(): ?SocialiteUser
    {
        try {
            return $this->provider->provider()->user();
        } catch (RuntimeException) {
            return null;
        }
    }

    public function user(): ?Authenticatable
    {
        return $this->record
            ? $this->users->retrieveById($this->record->user_id)
            : null;
    }

    public function link(Authenticatable $user): SocialIdentityContract
    {
        // Throw an exception if another user has this identity linked
        $identityInUse = ($r = $this->record) && $r->user_id !== $user->getAuthIdentifier();
        throw_if($identityInUse, IdentityInUseException::class);

        $this->record = $this->model->firstOrCreate([
            'provider_name' => $this->provider->name(),
            'provider_id' => $this->socialite()->getId(),
            'user_id' => $user->getAuthIdentifier(),
        ]);

        return $this;
    }

    public function unlink(): void
    {
        !$this->record ?: $this->record->deleteOrFail();
    }

    public function profile(): array
    {
        return [
          'name' => ($user = $this->socialite())->getName() ?? $user->getNickname(),
          'email' => $user->getEmail(),
          'avatar' => $user->getAvatar(),
        ];
    }
}
