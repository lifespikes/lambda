<?php

namespace Lambda\Authentication\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as BaseUser;
use Lambda\Authentication\Contracts\HasProviders;

class User extends BaseUser implements HasProviders
{
    protected $fillable = ['name', 'email', 'password'];
    protected $guarded = [];

    public function socialAccounts(): HasMany
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function addSocialAccount($provider, $providerName): void
    {
        $this->socialAccounts()->create([
            'provider_id' => $provider->getId(),
            'provider_name' => $providerName,
        ]);
    }
}
