<?php

namespace Lambda\Authentication\Contracts;

interface UserProvider
{
    public function getIdentifier(): int;

    public function getName(): string;

    public function getEmail(): string;
}
