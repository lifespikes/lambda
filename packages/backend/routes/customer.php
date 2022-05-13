<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['prefix' => '/'], function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    });
});

