<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Http\Controllers\Authentication\SocialAuthController;

Route::group([
    'prefix' => 'auth',
    'as' => 'auth.',
], function () {
    Route::group([
        'prefix' => '{social_repository}',
        'as' => 'social.',
        'controller' => SocialAuthController::class,
    ], function () {
        Route::named('callback');
    });
});
