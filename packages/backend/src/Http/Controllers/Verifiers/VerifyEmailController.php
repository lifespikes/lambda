<?php

namespace Lambda\Backend\Http\Controllers\Verifiers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use LifeSpikes\LaravelBare\Http\Controller;

class VerifyEmailController extends Controller
{
    public function __invoke(EmailVerificationRequest $request
    ): RedirectResponse {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(
                '/?verified=1'
            );
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended('/?verified=1');
    }
}
