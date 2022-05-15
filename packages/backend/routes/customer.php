<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Controllers\Customer\CustomerController;

Route::group(['prefix' => '/'], function () {

    // TODO: change this to a resource route. When I use a resource route, I get a 404 error.
    Route::get('/', [CustomerController::class, 'index'])->name('index');
    Route::post('/', [CustomerController::class, 'store'])->name('show');

    Route::get('/{id}', [CustomerController::class, 'show'])->name('show');
    Route::delete('/{id}', [CustomerController::class, 'destroy'])->name('destroy');
    Route::put('/{id}', [CustomerController::class, 'update'])->name('update');
});
