<?php

namespace Lambda\Authentication\Models;

use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    protected $table = 'user_socialite_accounts';

    protected $guarded = [];

    public static function provider(string $provider): \Illuminate\Database\Eloquent\Builder
    {
        return self::query()->where('provider_name', $provider);
    }
}