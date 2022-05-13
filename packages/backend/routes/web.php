<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::group(['middleware' => [], 'prefix' => 'customer'], __DIR__.'/customer.php');
