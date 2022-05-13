<?php

namespace Lambda\Customer;

use Illuminate\Support\ServiceProvider;

class CustomerProvider extends ServiceProvider
{
    public function register()
    {
        $this->loadMigrationsFrom(__DIR__.'/../migrations');
    }

    public function boot()
    {
    }
}
