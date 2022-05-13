<?php

namespace Lambda\Customer\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';

    protected $fillable = ['name', 'email', 'phone'];
}
