<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Http\Controllers\Password\NewPasswordController;
use Lambda\Backend\Http\Controllers\Password\PasswordResetLinkController;
use Lambda\Backend\Http\Controllers\RegistrationController;
use Lambda\Backend\Http\Controllers\SessionController;

Route::group(['middleware' => 'guest'], function () {
    Route::group(['prefix' => 'login'], function () {
        Route::get('/', [SessionController::class, 'create'])->name('login');
        Route::post('/', [SessionController::class, 'store'])->name('login.store');
    });

    Route::group(['prefix' => 'register'], function () {
        Route::get('/', [RegistrationController::class, 'create'])->name('register');
        Route::post('/', [RegistrationController::class, 'store'])->name(
            'register.store'
        );
    });

    Route::group(['prefix' => 'forgot-password'], function () {
        Route::get('/', [PasswordResetLinkController::class, 'create'])->name(
            'password.request'
        );
        Route::post('/', [PasswordResetLinkController::class, 'store'])->name(
            'password.email'
        );
    });

    Route::group(['prefix' => 'reset-password'], function () {
        Route::get('/{token}', [NewPasswordController::class, 'create'])->name(
            'password.reset'
        );
        Route::post('/', [NewPasswordController::class, 'store'])->name(
            'password.update'
        );
    });
});
