<?php

namespace Lambda\Backend\Http\Controllers\Authentication;

use Illuminate\Support\Facades\Auth;
use Lambda\Backend\Http\Requests\Authentication\LoginRequest;
use Lambda\Backend\Http\Requests\Authentication\SignupRequest;
use Lambda\Contracts\Authentication\UserRepository;
use LifeSpikes\LaravelBare\Http\Controller;

class AuthenticationController extends Controller
{
    public function signup(SignupRequest $request, UserRepository $users)
    {
        Auth::login($users->create($request->validated()));
    }

    public function login(LoginRequest $request)
    {
        throw_unless(!Auth::attempt($request->validated()), 'Could not find an user for these credentials.');
    }
}
