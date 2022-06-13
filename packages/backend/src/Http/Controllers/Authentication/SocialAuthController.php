<?php

namespace Lambda\Backend\Http\Controllers\Authentication;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Lambda\Contracts\Authentication\SocialRepository;
use Lambda\Contracts\Authentication\UserRepository;
use LifeSpikes\LaravelBare\Http\Controller;

class SocialAuthController extends Controller
{
    public const INTENT_SIGNUP = 0;
    public const INTENT_LOGIN = 1;
    public const INTENT_LINK = 2;

    public const ERROR_USED = 3;

    public function redirect(SocialRepository $socialLinker): RedirectResponse
    {
        return $socialLinker->provider()->redirect();
    }

    /**
     * Handles redirect from OAuth providers, determines intent and executes the
     * appropriate action. An exception is thrown if a bad request is received.
     */
    public function callback(SocialRepository $socialLinker, UserRepository $users)
    {
        $intent = $this->determineIntent(
            $user = Auth::user(),
            ($identity = $socialLinker->identity())->user()
        );

        $user = match ($intent) {
            self::INTENT_SIGNUP => $users->create($identity->profile()),
            self::INTENT_LOGIN => $identity->user(),
            default => $user
        };

        $identity->link($user);

        Auth::login($user);
    }

    /**
     * Determine what the user intends to do based on their authentication
     * and OAuth authorization state.
     */
    private function determineIntent($authUser, $linkedUser): ?int
    {
        if (!$authUser && !$linkedUser) {
            return self::INTENT_SIGNUP;
        } elseif ($authUser && !$linkedUser) {
            return self::INTENT_LINK;
        } elseif (!$authUser && $linkedUser) {
            return self::INTENT_LOGIN;
        } elseif ($authUser && $linkedUser) {
            return self::ERROR_USED;
        }

        return null;
    }
}
