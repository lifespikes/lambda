<?php

namespace Lambda\Customer;

use Illuminate\Support\ServiceProvider;
use Lambda\Customer\Contracts\Customer as CustomerContract;
use Lambda\Customer\Contracts\CustomerRepository as CustomerRepositoryContract;
use Lambda\Customer\Models\Customer;
use Lambda\Customer\Services\CustomerRepository;

class CustomerProvider extends ServiceProvider
{
    public function register()
    {
        $this->loadMigrationsFrom(__DIR__.'/../migrations');
    }

    public function boot()
    {
        $this->app->bind(CustomerContract::class, Customer::class);
        $this->app->bind(CustomerRepositoryContract::class, CustomerRepository::class);
    }
}
