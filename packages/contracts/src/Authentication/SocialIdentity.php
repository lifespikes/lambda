<?php

namespace Lambda\Contracts\Authentication;

use Illuminate\Contracts\Auth\Authenticatable;

interface SocialIdentity
{
    /**
     * @return Authenticatable|null Currently associated user
     */
    public function user(): ?Authenticatable;

    /**
     * Replace current user association.
     */
    public function link(Authenticatable $user): self;

    /**
     * Remove any active association.
     */
    public function unlink(): void;

    /**
     * @return array Profile details of social identity
     */
    public function profile(): array;
}
