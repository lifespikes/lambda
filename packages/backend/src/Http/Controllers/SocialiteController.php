<?php

namespace Lambda\Backend\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Lambda\Authentication\Contracts\SocialLinker;
use Lambda\Authentication\Services\CreateUserWithSocialite;
use Lambda\Authentication\Services\LinkWithSocialite;
use Lambda\Authentication\Services\UnlinkWithSocialite;
use LifeSpikes\LaravelBare\Http\Controller;

class SocialiteController extends Controller
{
    public function redirect(SocialLinker $socialLinker, $auth, string $providerName): RedirectResponse
    {
        Session::put('registerOrLogin', $auth);
        $socialLinker->setDriver($providerName);

        return $socialLinker->driver()->redirect();
    }

    public function callback(SocialLinker $socialLinker, string $providerName)
    {
        $registerOrLogin = Session::get('registerOrLogin');
        $socialLinker->setDriver($providerName);
        $linker = $socialLinker;
        $provider = $socialLinker->driver();

        if ('login' == $registerOrLogin) {
            $socialiteUser = $provider->user();
            $user = $provider->find($socialiteUser);
            if ($user) {
                Auth::login($user, true);

                return response(['message' => 'You are logged in', 'type' => 'success']);
            }
        }
        if ('register' == $registerOrLogin) {
            $socialiteUser = $provider->user();

            return app(CreateUserWithSocialite::class)->execute($providerName, $socialiteUser);
        }
        if ('link' == $registerOrLogin) {
            $socialiteUser = $provider->user();

            return app(LinkWithSocialite::class)->execute($providerName, $socialiteUser);
        }
    }

    public function linkProvider(SocialLinker $socialLinker, $providerName)
    {
        Session::put('user', auth()->user());
        Session::put('registerOrLogin', 'link');

        $socialLinker->setDriver($providerName);

        return $socialLinker->driver()->redirect();
    }

    public function unlinkProvider(string $providerName)
    {
        Session::put('user', auth()->user());

        return app(UnlinkWithSocialite::class)->execute($providerName);
    }
}
