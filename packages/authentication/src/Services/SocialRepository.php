<?php

namespace Lambda\Authentication\Services;

use Lambda\Contracts\Authentication\SocialIdentity;
use Lambda\Contracts\Authentication\SocialRepository as SocialRepositoryContract;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Facades\Socialite;

class SocialRepository implements SocialRepositoryContract
{
    protected string $providerName;
    protected Provider $provider;

    public function __construct(string $provider)
    {
        $this->provider = Socialite::driver(
            $this->providerName = $provider
        );
    }

    public function name(): string
    {
        return $this->providerName;
    }

    public function provider(): Provider
    {
        return $this->provider;
    }

    public function identity(): SocialIdentity
    {
        return app(SocialIdentity::class, [
            'provider' => $this,
        ]);
    }
}
