<?php

namespace Lambda\Authentication;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Lambda\Authentication\Models\SocialIdentity;
use Lambda\Authentication\Models\User;
use Lambda\Authentication\Services\SocialRepository;
use Lambda\Authentication\Services\UserRepository;
use Lambda\Contracts\Authentication\SocialIdentity as SocialIdentityContract;
use Lambda\Contracts\Authentication\SocialRepository as SocialLinkerContract;
use Lambda\Contracts\Authentication\UserRepository as UserRepositoryContract;
use SocialiteProviders\Manager\SocialiteWasCalled;
use SocialiteProviders\Microsoft\MicrosoftExtendSocialite;

class AuthenticationProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/auth.php', 'auth');

        $this->loadViewsFrom(__DIR__.'/../views', 'authentication');
        $this->loadMigrationsFrom(__DIR__.'/../migrations');

        $this->registerContainerBindings();
    }

    private function registerContainerBindings()
    {
        $this->app->bind(SocialLinkerContract::class, SocialRepository::class);
        $this->app->bind(SocialIdentityContract::class, SocialIdentity::class);
        $this->app->bind(UserRepositoryContract::class, UserRepository::class);
        $this->app->bind(Authenticatable::class, User::class);

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

    public function boot()
    {
        Event::listen(SocialiteWasCalled::class, MicrosoftExtendSocialite::class);
        $this->registerSocialiteProviders();
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
