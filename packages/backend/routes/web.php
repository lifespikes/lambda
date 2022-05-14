<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::group(['middleware' => [], 'prefix' => 'customers'], __DIR__.'/customer.php');
