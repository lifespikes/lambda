<?php

use Lambda\Contracts\Authentication\SocialRepository;
use function PHPUnit\Framework\assertEquals;

test('repository instance persists', function () {
    $linker = app(SocialRepository::class, ['provider' => 'facebook']);

    assertEquals(
        'facebook',
        getPropValue($linker->identity(), 'provider')->name()
    );
});
