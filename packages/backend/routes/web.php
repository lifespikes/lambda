<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/spikeform', function () {
    return Inertia::render('Spikeform');
});

Route::get('/theme', function () {
    return Inertia::render('Theme');
});

 Route::group(['middleware' => [], 'prefix' => '/'], __DIR__.'/customer.php');
