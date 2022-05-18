<?php

namespace Lambda\Blog\Contracts;

interface Tag
{
    public function name(): string;

    public function color(): string;

    public function delete();
}
