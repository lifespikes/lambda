<?php

namespace Lambda\Authentication\Services;

use Illuminate\Support\Facades\Hash;
use Lambda\Authentication\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Lambda\Contracts\Authentication\UserRepository as UserRepositoryContract;

class UserRepository implements UserRepositoryContract
{
    public function __construct(protected User $model)
    {
    }

    public function create(array $data): Authenticatable
    {
        return $this->model->create([
            ...$data,
            'password' => isset($data['password'])
                ? Hash::make($data['password'])
                : null,
        ]);
    }
}
