<?php

namespace Lifespikes\ScaffoldApp;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class ScaffoldAppProvider extends ServiceProvider
{
    public function register()
    {
        /**
         * Configs, migrations, etc.
         */
    }

    public function boot()
    {
        Route::get('/', function () {
            return Inertia::render('Home');
        });
    }
}
