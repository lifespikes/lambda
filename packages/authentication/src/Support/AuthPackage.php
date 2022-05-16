<?php

namespace Lambda\Authentication\Support;

use Illuminate\Support\Facades\Route;
use Lambda\Authentication\Contracts\SocialLinker as SocialLinkerContract;
use Lambda\Backend\Http\Controllers\SocialiteController;

class AuthPackage
{
    public static function bindSocialite(): void
    {
        Route::bind('social_linker', function ($driver) {
            ($linker = app()->make(SocialLinkerContract::class))
                ->setDriver($driver);

            return $linker;
        });

        Route::controller(SocialiteController::class)->group(function () {
            Route::get('social-auth/login/{social_linker}', 'redirect')->name(
                'social-auth.provider-to-redirect'
            );

            Route::match(['get', 'post'], 'auth/{social_linker}/callback', 'callback')
                ->name('handle-provider-callback');
        });
    }

}

