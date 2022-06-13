<?php

namespace Lambda\Customer\Services;

use Illuminate\Database\Eloquent\Collection;
use Lambda\Contracts\Customers\Customer as CustomerContract;
use Lambda\Contracts\Customers\CustomerRepository as CustomerRepositoryContract;
use Lambda\Customer\Models\Customer;

class CustomerRepository implements CustomerRepositoryContract
{
    public function __construct(public Customer $model)
    {
    }

    public function get(string $id): CustomerContract
    {
        return $this->model->findOrFail($id);
    }

    public function all(): Collection
    {
        return $this->model->all();
    }

    public function create(array $data): CustomerContract
    {
        return $this->model->create($data);
    }
}
