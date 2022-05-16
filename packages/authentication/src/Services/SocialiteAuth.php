<?php

namespace Lambda\Authentication\Services;

use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Contracts\User;
use Laravel\Socialite\Facades\Socialite;
use Lambda\Authentication\Contracts\SocialLinker as SocialLinkerContract;
use Lambda\Authentication\Models\SocialAccount;

class SocialiteAuth implements SocialLinkerContract
{
    protected string $providerName;
    protected Provider $provider;

    public function __construct(
        public UserProvider $users,
        AuthManager $auth,
        Repository $config,
    ) {
        //
    }

    public function setDriver(string $driver): void
    {
        $this->providerName = $driver;
        $this->provider = Socialite::driver($driver);
    }

    public function find(User $socialiteUser): ?Authenticatable
    {
        $socialUser = $this->query()
            ->where(['provider_id' => $socialiteUser->getId()])
            ->first();

        return $socialUser
            ? $this->users->retrieveById($socialUser['user_id'])
            : null;
    }

    public function link(Authenticatable $user, User $socialiteUser): void
    {
        $this->query()->create([
            'provider_id' => $socialiteUser->getId(),
            'provider_name' => $this->providerName,
            'user_id' => $user->getAuthIdentifier(),
        ]);
    }

    private function query(): Builder
    {
        return SocialAccount::provider($this->providerName);
    }

    public function driver(): Provider
    {
        return $this->provider;
    }
}

