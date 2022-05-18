<?php

namespace Lambda\Backend\Http\Controllers\Password;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use LifeSpikes\LaravelBare\Http\Controller;

class ConfirmablePasswordController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/ConfirmPassword', [
            'siteTitle' => 'Confirm Password',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        if (!Auth::guard('web')->validate([
            'email' => $request->user()->email,
            'password' => $request['password'],
        ])) {
            throw ValidationException::withMessages(['password' => __('auth.password')]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return redirect()->intended(url('/'));
    }
}