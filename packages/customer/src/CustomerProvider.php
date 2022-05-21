<?php

namespace Lambda\Customer;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Lambda\Contracts\Customers\Customer as CustomerContract;
use Lambda\Contracts\Customers\CustomerRepository as CustomerRepositoryContract;
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

        Route::bind('customer', fn ($id) => Customer::findOrFail($id));
    }
}
