<?php

use Illuminate\Support\Facades\Route;
use Lambda\Authentication\Middleware\RedirectIfAuthenticated;
use Lambda\Backend\Http\Controllers\SocialiteController;

Route::group(['middleware' => 'web'], function () {
    /* Social authentication concerns */

    Route::controller(SocialiteController::class)->group(function () {
        Route::get('social-auth/{auth}/{social_linker}', 'redirect')->name(
            'social-auth.provider-to-redirect'
        )->where('auth', '[login|register]+');

        Route::match(['get', 'post'], 'auth/{social_linker}/callback', 'callback')
            ->name('handle-provider-callback');

        Route::group(['middleware' => [RedirectIfAuthenticated::class]], function () {
            Route::get('link/{social_linker}', 'linkProvider')
                ->name('link-provider');
            Route::get('unlink/{provider}', 'unlinkProvider')
                ->name('unlink-provider');
        });
    });

    /* Classic authentication concerns */

    require __DIR__.'/guest.php';
    require __DIR__.'/authenticated.php';
});
