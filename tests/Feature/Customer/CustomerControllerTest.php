<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Lambda\Contracts\Customers\CustomerRepository;
use Lambda\Customer\Models\Customer;
use function Pest\Laravel\deleteJson;
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

    getJson('customers/'.$customer->id)
        ->assertOk()
        ->assertJsonStructure(['name', 'email', 'phone']);
});

test('can create a customer resource', function () {
    $mock = mock(CustomerRepository::class)->expect(create: fn (array $data) => Customer::make($data));

    instance(CustomerRepository::class, $mock);

    $response = postJson('customers', ['name' => 'John Doe', 'email' => 'test@gmail.com', 'phone' => '123456789']);

    $response->assertOk();

    $response->assertJsonStructure(['name', 'email', 'phone']);
});

test('can update a customer resource', function () {
    $customer = Customer::first();

    $response = putJson('customers/'.$customer->id, ['name' => 'John Doe 2', 'email' => 'test@gmail.com', 'phone' => '123456789']);

    $response->assertOk();

    $customer = $customer->refresh();

    expect($customer->only('name'))->toEqual(['name' => 'John Doe 2']);
});

test('can get validation errors when create a customer resource', function () {
    $response = postJson('customers', ['name' => 'John Doe']);

    $response->assertStatus(422);

    $response->assertJsonValidationErrors(['email', 'phone']);
});

test('can delete a customer resource', function () {
    $customer = Customer::first();

    $response = deleteJson('customers/'.$customer->id);

    $response->assertOk();

    $customer = $customer->fresh();

    expect($customer)->toBeNull();
});
