<?php

namespace Lambda\Backend\Controllers\Customer;

use Illuminate\Http\Request;
use Lambda\Backend\Requests\Customer\CustomerStoreRequest;
use Lambda\Customer\Contracts\CustomerRepository as CustomerRepositoryContract;

class CustomerController
{
    public function index(Request $request, CustomerRepositoryContract $repository)
    {
        return $repository->all();
    }

    public function store(CustomerStoreRequest $request, CustomerRepositoryContract $repository)
    {
        return $repository->create($request->all());
    }

    public function destroy(Request $request, string $id, CustomerRepositoryContract $repository)
    {
        return $repository->delete($id);
    }

    public function update(CustomerStoreRequest $request, string $id, CustomerRepositoryContract $repository)
    {
        return $repository->update($id, $request->all());
    }


    public function show(Request $request, string $id, CustomerRepositoryContract $repository)
    {
        return $repository->get($id);
    }
}
