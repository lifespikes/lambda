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


        Route::group(['middleware' => ['web'], 'scopeBindings' => true], __DIR__.'/../routes/web.php');

        Route::get('/', function () {
            return Inertia::render('Home');
        });

        Route::get('/spikeform', function () {
            return Inertia::render('Spikeform');
        });

        Route::get('/theme', function () {
            return Inertia::render('Theme');
        });
    }
}
