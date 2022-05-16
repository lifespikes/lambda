<?php

namespace Lambda\Authentication\Contracts;

use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Contracts\User;

interface SocialLinker
{
    public function find(User $socialiteUser): ?Authenticatable;

    public function link(Authenticatable $user, User $socialiteUser): void;

    public function driver(): Provider;

    public function setDriver(string $driver): void;
}
