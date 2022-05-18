<?php

namespace Lambda\Customer\Contracts;

interface CustomerRepository
{
    public function get(string $id): Customer;

    public function all();

    public function create(array $data): Customer;
}
