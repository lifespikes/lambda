# Project Lambda
Basically a really cool project full of awesome stuff for business
owners.

## Getting Started
1. Set up your `.env` file from the [.env.example](.env.example) file.
2. Install dependencies using `yarn install` and `composer install`.
3. Run the JS compiler/dev server using `yarn run dev`.
4. _Off to the races!_

## Contributing
A lot of your changes should come in the form of **packages**, these are
libraries of code that may or may not integrate with the Laravel container to
provide functionality.

**Packages do not** declare routes, middleware, or any entrypoint or mutation.
Rather, packages should expose a Facade that can be used by the consuming app.

### Working with packages
Use the language's package manager to create a package:
```shell
$ (composer | yarn) workspace:create [package-name]
```
There are scripts behind each command that'll care of the necessary
configuration from there.

**Controlling dependencies** is different and important. When adding
a new package, 99% of the time the dependency should be declared in the
consuming package, and **not** the root `composer.json` or `package.json`.

### Writing tests
Tests are a must to building a successful product. You can use:
- Pest (PHP)
- Jest (JS)

to write tests. These are syntantically similar.
