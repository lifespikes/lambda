<?php

namespace Lambda\Customer\Services;

use Lambda\Customer\Contracts\Customer as CustomerContract;
use Lambda\Customer\Contracts\CustomerRepository as CustomerRepositoryContract;
use Lambda\Customer\Models\Customer;

class CustomerRepository implements CustomerRepositoryContract
{
    public function get(string $id): CustomerContract
    {
        return Customer::findOrFail($id);
    }

    public function all()
    {
        return Customer::all();
    }

    public function create(array $data): CustomerContract
    {
        return Customer::create($data);
    }

    public function delete(string $id): bool|null
    {
        return $this->get($id)->delete();
    }

    public function update(string $id, array $data): bool|null
    {
        return $this->get($id)->update($data);
    }
}
