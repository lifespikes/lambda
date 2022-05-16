<?php

namespace Lambda\Backend\Http\Controllers\Password;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use LifeSpikes\LaravelBare\Http\Controller;

class PasswordResetLinkController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'siteTitle' => 'Forgot Password',
            'status' => session('status'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required_if:type,email', 'email', 'nullable'],
            'phone_number' => [
                'required_if:type,phone_number',
                'string',
                'nullable',
            ],
            'type' => ['required', 'in:email,phone_number'],
        ]);

        $credentials = 'email' === $request->input('type')
            ? $request->only('email')
            : $request->only('phone_number');

        $status = Password::sendResetLink(
            $credentials,
            function ($user, $token) {
                return $user->sendPasswordResetNotification($token);
            }
        );

        if (Password::RESET_LINK_SENT === $status) {
            return back()->with('status', __($status));
        }

        $status = $this->getStatus($status, $request->input('type'));

        throw ValidationException::withMessages(['email' => [trans($status)]]);
    }

    protected function getStatus(string $status, string $type): string
    {
        if ('phone_number' === $type && Password::INVALID_USER === $status) {
            return 'passwords.phone_number';
        }

        return $status;
    }
}
