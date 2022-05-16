<?php

namespace PayrollGoat\Backend\Http\Controllers\Authentication;

use Illuminate\Support\Facades\Auth;
use Lambda\Authentication\Contracts\AuthModule;
use Lambda\Backend\Http\Requests\Authentication\SignupRequest;
use Lambda\Backend\Http\Requests\Authentication\VerificationRequest;
use LifeSpikes\LaravelBare\Http\Controller;

class SignupController extends Controller
{
    public function store(SignupRequest $request, AuthModule $authModule): \Illuminate\Http\RedirectResponse
    {
        Auth::login($authModule->create($request->validated()));

        return to_route('select-company.index');
    }

    public function verification(VerificationRequest $request)
    {
    }
}
