<?php

namespace Lambda\Backend;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use LifeSpikes\PhpBeam\Support\PhpBeam;
use Lambda\Contracts\Authentication\SocialRepository;

class BackendProvider extends ServiceProvider
{
    public function boot()
    {
        PhpBeam::bindInertia();

        $this->registerRouteBinds();
        $this->registerRoutes();
    }

    public function registerRouteBinds()
    {
        collect([
            'social_repository' => fn (string $provider) => app(SocialRepository::class, ['provider' => $provider]),
        ])->each(fn ($binder, $key) => Route::bind($key, $binder));
    }

    public function registerRoutes()
    {
        /*
         * Useful for routes whose name, controller method, and endpoint URI match.
         */
        Route::macro(
            'named',
            fn (string $name, $target = null, $method = 'get') => Route::$method($name, $target ?? $name)->name($name)
        );

        Route::macro('module', fn (string $name) => Route::group([], __DIR__."/../routes/$name.php"));

        Route::group(['middleware' => ['web'], 'scopeBindings' => true], __DIR__.'/../routes/web.php');
    }
}
