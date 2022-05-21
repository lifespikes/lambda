<?php

namespace Lambda\Authentication\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Lambda\Authentication\Models\Factories\IdentityFactory;

class Identity extends Model
{
    use HasFactory;

    protected $table = 'user_identities';
    protected $guarded = [];

    protected static function newFactory(): IdentityFactory
    {
        return IdentityFactory::new();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
