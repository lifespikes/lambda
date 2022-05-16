<?php

namespace Lambda\Backend\Http\Controllers;

use Illuminate\Http\RedirectResponse as Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use LifeSpikes\LaravelBare\Http\Controller;
use Lambda\Backend\Http\Requests\LoginRequest;

class SessionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'siteTitle' => 'Sign In',
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request): Redirect
    {
        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->intended(url('/'));
    }

    public function destroy(Request $request): Redirect
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
