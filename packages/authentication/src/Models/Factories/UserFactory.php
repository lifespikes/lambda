<?php

namespace Lambda\Authentication\Models\Factories;

use Illuminate\Support\Carbon;
use Lambda\Authentication\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt($this->faker->password),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
