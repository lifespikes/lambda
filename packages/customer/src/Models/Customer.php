<?php

namespace Lambda\Customer\Models;

use Illuminate\Database\Eloquent\Model;
use Lambda\Contracts\Customers\Customer as CustomerContract;

class Customer extends Model implements CustomerContract
{
    protected $table = 'customers';

    protected $fillable = ['name', 'email', 'phone'];
}
