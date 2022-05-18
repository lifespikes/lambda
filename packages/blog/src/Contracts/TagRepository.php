<?php

namespace Lambda\Blog\Contracts;

interface TagRepository
{
    public function create(string $name, string $color): Tag;

    /**
     * @return Tag[]
     */
    public function all(): array;
}
