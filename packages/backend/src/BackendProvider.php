<?php

namespace Lambda\Backend;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use LifeSpikes\PhpBeam\Support\PhpBeam;

class BackendProvider extends ServiceProvider
{
    public function register()
    {
    }

    public function boot()
    {
        PhpBeam::bindInertia();

        Route::get('/', function () {
            return Inertia::render('Home');
        });
    }
}
