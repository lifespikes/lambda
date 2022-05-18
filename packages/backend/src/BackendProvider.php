<?php

namespace Lambda\Backend;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
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
    }
}
