<?php

namespace Lambda\Backend\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Lambda\Authentication\Contracts\SocialLinker;
use Lambda\Authentication\Services\CreateUserWithSocialite;
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

        /*if (($user = Auth::user())) {
            $linker->link($user, $provider->user());
        } else {
            throw_if(
                !($appUser = $linker->find($provider->user())),
                'There are no users linked to your account.'
            );

            Auth::login($appUser);
        } */
    }
}
