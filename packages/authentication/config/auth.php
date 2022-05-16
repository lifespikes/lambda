<?php /** @noinspection ALL */

return [
    'socialite' => [
        'facebook' => [
            'client_id' => env('FACEBOOK_CLIENT_ID'),
            'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
            'redirect' => '/auth/facebook/callback',
        ],

        'google' => [
            'client_id' => env('GOOGLE_CLIENT_ID'),
            'client_secret' => env('GOOGLE_CLIENT_SECRET'),
            'redirect' => '/auth/google/callback',
        ],

        'microsoft' => [
            'client_id' => env('MICROSOFT_CLIENT_ID'),
            'client_secret' => env('MICROSOFT_CLIENT_SECRET'),
            'redirect' => '/auth/microsoft/callback',
        ],
    ],
];

