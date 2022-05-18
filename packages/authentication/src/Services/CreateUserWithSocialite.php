<?php

namespace Lambda\Authentication\Services;

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Lambda\Authentication\Models\SocialAccount;
use Lambda\Authentication\Models\User;

class CreateUserWithSocialite
{
    public function execute(string $providerName, $socialAccount)
    {
        $socialiteUser = SocialAccount::whereProviderName($providerName)->whereProviderId($socialAccount->id)->first();
        if ($socialiteUser) {
            return to_route('login')->with('error', 'The user already exists');
        }

        if (!$socialAccount->name) {
            Session::put('socialite_account', $socialAccount);
            Session::put('provider-name', $providerName);

            return Inertia::render('SocialiteServices\SocialiteEnterName');
        }

        DB::transaction(function () use ($socialAccount, $providerName) {
            $user = User::where('email', $socialAccount->getEmail())->first();

            if (!$user) {
                // Create new user
                $user = App::make(User::class)->create([
                    'name' => $socialAccount->getName(),
                    'email' => $socialAccount->getName(),
                    'password' => Hash::make(Str::random(8)),
                ]);
            }

            $user->addSocialAccount($socialAccount, $providerName);
        });

        return to_route('login')->with('success', 'The user has been created');
    }
}
