<?php

namespace Lambda\Backend\Http\Controllers\Verifiers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use LifeSpikes\LaravelBare\Http\Controller;

class EmailVerificationPromptController extends Controller
{
    public function __invoke(Request $request
    ): Response|RedirectResponse {
        return $request->user()->hasVerifiedEmail()
            ? redirect()->intended()
            : Inertia::render(
                'Auth/VerifyEmail',
                ['status' => session('status')]
            );
    }
}
