<?php

use Illuminate\Support\Facades\Route;
use Lambda\Backend\Http\Controllers\Customer\CustomerController;

Route::apiResource('customers', CustomerController::class);
