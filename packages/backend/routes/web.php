<?php

/**
 * Primary route file, routes should be grouped in other
 * files and included here.
 */

use Illuminate\Support\Facades\Route;


// Home route, probably will change later
Route::inertia('/', 'Home');

// Routes used for development purposes. Disabled on production environments.
if ('local' !== app()->environment()) {
    Route::module('local');
}

// All other routes go here

Route::module('authentication');
Route::module('customer');
