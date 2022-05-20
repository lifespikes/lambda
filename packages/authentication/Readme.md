# Authentication Module
This module provides basic authentication and user record management as well
as integrations with common OAuth identity providers.

Supported providers:
- Microsoft
- Google
- Facebook

## Usage
- You can link a provider to an existing user account.
- You can unlink a previously linked provider to an existing account.
- You can register a new user through a provider.
- You can register as many providers at the same time as you want.

### Authenticating a user socially
Using a social identity to locate and authenticate a user.

```php
    // Use the SocialLinker contract to resolve
    // dependency
    $socialLinker = app(SocialLinker::class)
        ->setDriver('microsoft'); // Or use DI
        
    // Get instance of Socialite provider
    $provider = $socialLinker->driver();
    
    // Assume this code is executed in a callback after
    // provider redirection.
    $user = $provider->find($provider->user());
```

Register a user through a provider (Facebook, Google or Microsoft)
```php
    if (!$user) {
                // If the user does not exist a new one will be created.
                // with the data coming from the provider
                // Assume this code is executed in a callback after
                // provider redirection.
                $user = App::make(User::class)->create([
                    'name' => $socialAccount->getName(),
                    'email' => $socialAccount->getName(),
                    'password' => Hash::make(Str::random(8)),
                ]);
            }

            $user->addSocialAccount($socialAccount, $providerName);
```

Unlink a user to a previously linked provider
```php
     $user = Session::get('user'); // We obtain the user in session
        $socialiteUser = SocialAccount::whereProviderName($providerName)->whereUserId($user->id)->first(); // Get the user linked to the provider
        // Check user exist and delete socialite user
        if ($socialiteUser) {
            $socialiteUser->delete();

            return response(['message' => 'Provider untied', 'type' => 'success']);
        }

        return response(['message' => 'The user does not exist', 'type' => 'error']);
    }
```
