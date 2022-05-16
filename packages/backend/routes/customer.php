<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Controllers\Customer\CustomerController;

Route::apiResource('/customers', CustomerController::class);
