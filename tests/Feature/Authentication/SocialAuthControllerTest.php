<?php

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Lambda\Authentication\Models\Identity;
use Lambda\Authentication\Models\User as UserAlias;
use Laravel\Socialite\Contracts\User;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\AbstractProvider;
use function Pest\Laravel\assertAuthenticatedAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\getJson;

function fakeSocialite()
{
    // this is how we fake being logged in as user ID 10
    Socialite::shouldReceive('driver')
        ->andReturn(
            mock(AbstractProvider::class)->expect(
                user: fn () => mock(User::class)->allows([
                    'getEmail' => 'bob@johnson.com',
                    'getId' => 10,
                    'getName' => 'Bobby John',
                    'getAvatar' => 'Cat.gif',
                ])
            )
        );
}

function runProviderCallbackRequest(): TestResponse
{
    return getJson(route('auth.social.callback', [
        'social_repository' => 'facebook',
    ]));
}

uses(RefreshDatabase::class);

test('user and identity are created as signup', function () {
    fakeSocialite();

    runProviderCallbackRequest()
        ->assertSuccessful();

    assertDatabaseHas('user_identities', [
       'provider_name' => 'facebook',
       'provider_id' => 10,
    ]);

    assertDatabaseHas('users', [
        'email' => 'bob@johnson.com',
        'name' => 'Bobby John',
    ]);
});

test('cannot double associate identity', function () {
    fakeSocialite();

    Identity::factory()->for(UserAlias::factory())->create([
        'provider_name' => 'facebook',
        'provider_id' => 10,
    ]);

    auth()->login(UserAlias::factory()->create());

    runProviderCallbackRequest()
        ->assertUnprocessable()
        ->assertSee('This social profile is already in use');
});

test('user can login with social', function () {
    fakeSocialite();

    Identity::factory()->for(($user = UserAlias::factory()->create()))->create([
        'provider_name' => 'facebook',
        'provider_id' => 10,
    ]);

    runProviderCallbackRequest()->assertSuccessful();
    assertAuthenticatedAs(app(UserProvider::class)->retrieveById($user['id']));
});
