<?php

namespace Lambda\Authentication\Services;

use Illuminate\Support\Facades\Session;
use Lambda\Authentication\Models\SocialAccount;
use Lambda\Authentication\Models\User;


class UnlinkWithSocialite
{
    public function execute(string $providerName)
    {
        // $user = Session::get('user');
        $user = User::find(1);
        $socialiteUser = SocialAccount::whereProviderName($providerName)->whereUserId($user->id)->first();
        // Check user exist and delete socialite user
        if ($socialiteUser) {
            $socialiteUser->delete();

            return response(['message' => 'Provider untied', 'type' => 'success']);
        }

        return response(['message' => 'The user does not exist', 'type' => 'error']);
    }
}
