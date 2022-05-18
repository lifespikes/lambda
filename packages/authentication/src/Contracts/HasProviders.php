<?php

namespace Lambda\Authentication\Contracts;

use Illuminate\Contracts\Auth\Authenticatable;

interface HasProviders extends Authenticatable
{
    /**
     * @return UserProvider[]
     */
    public function socialAccounts();

    public function addSocialAccount($provider, $providerName): void;
}