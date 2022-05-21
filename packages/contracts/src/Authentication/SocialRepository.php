<?php

namespace Lambda\Contracts\Authentication;

use Laravel\Socialite\Contracts\Provider;

/**
 * Contract represents a Socialite driver and its
 * integration with the user accounts system. Should be used to
 * associate and find users through social identities.
 */
interface SocialRepository
{
    /**
     * @return string Driver/provider name
     */
    public function name(): string;

    /**
     * @return Provider Underlying Socialite driver
     */
    public function provider(): Provider;

    /**
     * @return SocialIdentity Interface for interaction with social user
     */
    public function identity(): SocialIdentity;
}
