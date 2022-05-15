<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Lambda\Customer\Contracts\CustomerRepository;
use Lambda\Customer\Models\Customer;
use function Pest\Laravel\getJson;
use function Pest\Laravel\instance;
use function Pest\Laravel\postJson;
use function Pest\Laravel\putJson;

uses(RefreshDatabase::class);

beforeEach(function () {
    Customer::make(['name' => 'John Doe'])->save();
});

test('can get all customer resources', function () {
    $mock = mock(CustomerRepository::class)->expect(all: fn () => Customer::all());

    instance(CustomerRepository::class, $mock);

    $response = getJson('customers');

    $response->assertOk();

    $response->assertJsonCount(1);
});

test('can get a customer resource', function () {
    $customer = Customer::first();

    $mock = mock(CustomerRepository::class)->expect(get: fn () => $customer);

    instance(CustomerRepository::class, $mock);

    $response = getJson('customers/'.$customer->id);

    $response->assertOk();

    $response->assertJsonStructure(['name', 'email', 'phone']);
});

test('can create a customer resource', function () {
    $mock = mock(CustomerRepository::class)->expect(create: fn (array $data) => Customer::make($data));

    instance(CustomerRepository::class, $mock);

    $response = postJson('customers', ['name' => 'John Doe', 'email' => 'test@gmail.com', 'phone' => '123456789']);

    $response->assertOk();

    $response->assertJsonStructure(['name', 'email', 'phone']);
});

test('can update a customer resource', function () {
    $mock = mock(CustomerRepository::class)->expect(update: fn () => true);

    instance(CustomerRepository::class, $mock);

    $response = putJson('customers/1', ['name' => 'John Doe', 'email' => 'test@gmail.com', 'phone' => '123456789']);

    $response->assertOk();

});

test('can get validation errors when create a customer resource', function () {
    $response = postJson('customers', ['name' => 'John Doe']);

    $response->assertJsonValidationErrors(['email', 'phone']);
});
