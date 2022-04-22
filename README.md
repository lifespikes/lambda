# Scaffold

----

_This project is new, and under constant development. Please report
bugs and other issues promptly._

`lifespikes/scaffold` is a repository that features a base implementation
of our **stack**, powered by tools found in the `lifespikes/lifespikes`
monorepo.

- [Getting Started](#getting-started)
  - [Configuring](#configuring)
  - [Usage](#usage)
    - [JS Toolkit](#yarn-vite-and-prettier)
    - [PHP Toolkit](#monorepo-composer-cli)
    - [Linters/Fixers](#linting-and-formatting)
- [Why use Scaffold?](#why-scaffold)
- [Contributing](#contributing)

## Getting Started

### Installation
Setting up a project using Scaffold is composed of a single `composer command`. Our
project installer will handle the rest.

```bash
composer create-project lifespikes/scaffold project-name
```

### Configuring
Inspired by Vite's zero-configuration pattern, Scaffold requires in essence no
configuration to be used. This of course comes at the price of the package being
strongly opinionated, but a breeze to get going.

The only option you'll need to change in the included `.env.example`,
would be the usual Laravel config, plus the following:

```dotenv
# Primary laravel-vite entrypoint
VITE_ENTRY_POINT="packages/node-pkg/src/App.tsx"
```

This option just decides where `php-beam` will tell Inertia's default
config provider to look for an entrypoint.

You can also configure settings for `monorepo-cli` using your composer file's
`extra.monorepo-cli` section.

### Usage

#### Yarn, Vite, and Prettier

> Custom tooling for JS packages is underway.

Our `package.json` comes pre-configured with all scripts and setups you'll need to
start on a project.

- To start your Vite server, simply run `yarn dev`.
- To lint manually, run `yarn lint`.

If you use IntelliJ IDEs, this project also includes an `.idea` folder with
file watchers that can assist with both JS and PHP linting.

When creating a new JS package, you can use Yarn's workspace feature. Just follow
these steps:

- Create a new directory in `packages`.
- Create a `package.json` file in that directory.
  - Just provide basic info: Like name, version, and dependencies.
- Now, create a `src` directory in your new folder.
- Once you add some source files, go back to your **root-level** `package.json`.
- Add `packages/my-package` to the `workspaces` array.
- Now run `yarn`, and voilà! You're ready to start working on your new package.

#### Monorepo Composer CLI
Scaffold's `monorepo-cli` is a composer plugin that wraps around
`monorepo-builder` and also provides helper commands for managing
packages and dependencies.

You can run any of these `composer` commands from the root of your project:

| Command                               | Description                                      |
|---------------------------------------|--------------------------------------------------|
| `composer workspace:create [package]` | Creates and registers a new Laravel package.     |
 | `composer workspace:merge`            | Merges and validates package dependencies.       |
| `composer workspace:release v0.0.0`   | Run release workers, often used for code-splits. |

Additionally, installing a package using Composer will prompt the user to select the
package they wish to install a dependency for. This helps avoid changes directly to the root
composer file, which can cause isolation issues down the road.

### Linting and Formatting
Keeping code clean is a top priority, but maintaining uniform tooling setups can at
times be difficult to keep track of, and in most cases it'll clutter your project.

Scaffold implements two linting and formatting tools. These are essentially
plug-and-play, and require no additional configuration:

- `php-cs-fixer`
  - Scaffold's composer file features a path to `php-beam`'s custom ruleset.
- `prettier-standard`
  - Zero-config ESLint/Prettier combo, following the `standard/standard` config.

## Why Scaffold?
Scaffold's objective is to provide a quick start for an event-driven, SOLID,
and package-oriented architecture. Primarily, you'll find packages built by
LS that are essentially library collections with a few support scripts. We
call each of these **beams**.

| Package                   | Responsibility                                          |
|---------------------------|---------------------------------------------------------|
| `lifespikes/php-beam`     | Bootstraps `laravel-bare`, `laravel-vite`, and Inertia. |
| `lifespikes/js-beam`      | Features a helper for Inertia apps running on Vite.     |
| `lifespikes/js-beam-vite` | Server-only package for configuring vite.               |
| `lifespikes/monorepo-cli` | Composer plugin for simpler monorepo management.        |                                                       |

## Contributing
Scaffold is built to help all LifeSpikes team members have an easier time getting projects
started and kept uniform with company guidelines. If you'd like to contribute to Scaffold or
its components, please submit a PR to `lifespikes/lifespikes` on the appropriate package.

Changes to Scaffold itself should only correspond to a change in usage or configuration in
its components.
