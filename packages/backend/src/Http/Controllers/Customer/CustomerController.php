<?php

namespace Lambda\Backend\Http\Controllers\Customer;

use Lambda\Contracts\Customers\Customer;
use Lambda\Contracts\Customers\CustomerRepository;
use Lambda\Contracts\Customers\Customer as CustomerContract;
use Lambda\Backend\Http\Requests\Customer\CustomerStoreRequest;

class CustomerController
{
    public function index(CustomerRepository $repository)
    {
        return $repository->all();
    }

    public function store(CustomerStoreRequest $request, CustomerRepository $repository): CustomerContract
    {
        return $repository->create($request->all());
    }

    public function destroy(Customer $customer): ?bool
    {
        return $customer->delete();
    }

    public function update(CustomerStoreRequest $request, Customer $customer): bool
    {
        return $customer->update($request->all());
    }

    public function show(Customer $customer): Customer
    {
        return $customer;
    }
}
