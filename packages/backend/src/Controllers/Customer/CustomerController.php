<?php

namespace Lambda\Backend\Controllers\Customer;

use Illuminate\Http\Request;
use Lambda\Backend\Requests\Customer\CustomerStoreRequest;
use Lambda\Customer\Contracts\CustomerRepository;
use Lambda\Customer\Models\Customer;

class CustomerController
{
    public function index(Request $request, CustomerRepository $repository)
    {
        return $repository->all();
    }

    public function store(CustomerStoreRequest $request, CustomerRepository $repository)
    {
        return $repository->create($request->all());
    }

    public function destroy(Request $request, Customer $customer)
    {
        return $customer->delete();
    }

    public function update(CustomerStoreRequest $request, Customer $customer)
    {
        return $customer->update($request->all());
    }

    public function show(Request $request, Customer $customer)
    {
        return $customer;
    }
}
