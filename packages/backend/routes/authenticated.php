<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Http\Controllers\Password\ConfirmablePasswordController;
use Lambda\Backend\Http\Controllers\SessionController;
use Lambda\Backend\Http\Controllers\Verifiers\VerifyEmailController;
use Lambda\Backend\Http\Controllers\Verifiers\EmailVerificationPromptController;

Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'verify-email', 'as' => 'verification.'], function () {
        Route::get('/', [EmailVerificationPromptController::class, '__invoke'])->name(
            'notice'
        );
        Route::get('/{id}/{hash}', [VerifyEmailController::class, '__invoke']
        )->middleware([
            'signed',
            'throttle:6,1',
        ])->name('verify');
    });

    Route::post(
        '/email/verification-notification',
        [EmailVerificationPromptController::class, 'store']
    )
        ->middleware(['auth', 'throttle:6,1'])
        ->name('verification.send');

    Route::group(['prefix' => 'confirm-password'], function () {
        Route::get('/', [ConfirmablePasswordController::class, 'create'])->name(
            'confirm-password'
        );
        Route::post('/', [ConfirmablePasswordController::class, 'store'])->name(
            'confirm-password.store'
        );
    });

    Route::get('/logout', [SessionController::class, 'destroy'])->name('logout');
});
