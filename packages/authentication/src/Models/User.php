<?php

namespace Lambda\Authentication\Models;

use Illuminate\Foundation\Auth\User as BaseUser;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Lambda\Authentication\Models\Factories\UserFactory;

class User extends BaseUser
{
    use HasFactory;

    protected $table = 'users';
    protected $guarded = [];

    protected static function newFactory(): UserFactory
    {
        return UserFactory::new();
    }

    public function identities(): HasMany
    {
        return $this->hasMany(Identity::class);
    }
}
