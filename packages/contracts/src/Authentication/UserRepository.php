<?php

namespace Lambda\Contracts\Authentication;

use Illuminate\Contracts\Auth\Authenticatable;

interface UserRepository
{
    public function create(array $data): Authenticatable;
}
