<?php

use Illuminate\Support\Collection;
use J6s\PhpArch\Component\Architecture;
use J6s\PhpArch\PhpArch;

/**
 * Generate phpArch component parameters.
 *
 * @return string[]
 */
function pkg(string $packageName): array
{
    return [
        PACKAGES_DIR."/$packageName/composer.json",
        BASE_DIR.'/composer.lock',
        $packageName,
    ];
}

/**
 * @return Collection list of PHP packages
 */
function getPackages(): Collection
{
    return collect(glob(__DIR__.'/../../packages/*/composer.json'))
        ->map(fn ($file) => basename(dirname($file)))
        ->filter(fn ($package) => 'contracts' !== $package);
}

/*
 * Tests all packages except for Contracts.
 */
test('modules have no illegal dependencies', function () {
    $analyzer = (new PhpArch());
    ($arch = new Architecture())
        ->addComposerBasedComponent(...pkg('contracts'));

    getPackages()->each(
        fn ($package) => $analyzer->fromDirectory(PACKAGES_DIR."/$package/src") &&
            $arch->addComposerBasedComponent(...pkg($package))
                ->isAllowedToDependOn('contracts')
    );

    $analyzer->validate($arch)
        ->assertHasNoErrors();
});
