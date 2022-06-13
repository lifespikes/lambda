<?php

namespace Lambda\Authentication\Models\Factories;

use Illuminate\Support\Carbon;
use Lambda\Authentication\Models\Identity;
use Illuminate\Database\Eloquent\Factories\Factory;

class IdentityFactory extends Factory
{
    protected $model = Identity::class;

    public function definition(): array
    {
        return [
            'user_id' => $this->faker->randomNumber(),
            'provider_name' => $this->faker->randomElement(['facebook', 'google', 'microsoft']),
            'provider_id' => $this->faker->randomNumber(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
