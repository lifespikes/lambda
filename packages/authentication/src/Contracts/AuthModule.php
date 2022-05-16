<?php

namespace Lambda\Authentication\Contracts;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;

interface AuthModule
{
    public function create(array|Request $data): Authenticatable;
}
