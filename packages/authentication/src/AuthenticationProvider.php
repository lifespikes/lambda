<?php

namespace Lambda\Authentication;

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Lambda\Authentication\Contracts\SocialLinker as SocialLinkerContract;
use Lambda\Authentication\Services\SocialiteAuth;
use SocialiteProviders\Manager\SocialiteWasCalled;
use SocialiteProviders\Microsoft\MicrosoftExtendSocialite;

class AuthenticationProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/auth.php', 'auth');
        $this->loadViewsFrom(__DIR__.'/../views', 'authentication');
        $this->loadMigrationsFrom(__DIR__.'/../migrations');

        $this->registerSocialiteProviders();
        $this->registerContainerBindings();
    }

    public function boot()
    {
        Event::listen(SocialiteWasCalled::class, MicrosoftExtendSocialite::class);

        $this->loadRoutesFrom(__DIR__.'/../../backend/routes/routes.php');
        $this->loadRoutesFrom(__DIR__.'/../../backend/routes/guest.php');

        $config = $this->app->make('config');

        $config->set('socialite', [
                ...$config->get('auth.socialite'),
                ...$config->get('socialite', []),
            ]);
    }

    private function registerContainerBindings()
    {
        $this->app->bind(SocialLinkerContract::class, SocialiteAuth::class);

        $this->app->bindIf(UserProvider::class, function ($app) {
            $auth = $app->make('auth');
            $config = $app->make('config');

            return $auth->createUserProvider(
                $config->get(
                    "auth.guards.{$auth->getDefaultDriver()}.provider"
                )
            );
        });
    }

    private function registerSocialiteProviders()
    {
        ($config = $this->app->make('config'))
            ->set('services', [
                ...$config->get('services'),
                ...$config->get('auth.socialite'),
            ]);
    }
}
