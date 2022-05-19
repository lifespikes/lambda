<?php

namespace Lambda\Authentication\Services;

use Illuminate\Support\Facades\Session;
use Lambda\Authentication\Models\SocialAccount;
use Lambda\Authentication\Models\User;


class LinkWithSocialite
{
    public function execute($providerName, $socialiteUser)
    {
        // $user = Session::get('user');
        $user = User::find(1);
        $socialiteAccount = SocialAccount::whereProviderName($providerName)->whereProviderId($socialiteUser->id)->first();
        if ($socialiteAccount) {
            $user->addSocialAccount($socialiteUser, $providerName);
        }

        // TODO: Revisar la redireccion de la ruta si va a dashborad o donde
        return to_route('login')->with('success', 'The provider has been linked to your account.');
    }
}
