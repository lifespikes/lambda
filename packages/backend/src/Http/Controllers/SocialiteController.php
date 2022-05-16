<?php

namespace Lambda\Backend\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Lambda\Authentication\Contracts\SocialLinker;
use LifeSpikes\LaravelBare\Http\Controller;

class SocialiteController extends Controller
{
    public function redirect(SocialLinker $socialLinker, string $providerName): RedirectResponse
    {
        $socialLinker->setDriver($providerName);
        return $socialLinker->driver()->redirect();
    }

    public function callback(SocialLinker $socialLinker, string $providerName)
    {
        $socialLinker->setDriver($providerName);
        $linker = $socialLinker;
        $provider = $socialLinker->driver();
        // dd($provider);
        if (($user = Auth::user())) {
            $linker->link($user, $provider->user());
        } else {
            throw_if(
                !($appUser = $linker->find($provider->user())),
                'There are no users linked to your account.'
            );

            Auth::login($appUser);
        }
    }
}
