<?php

namespace Lambda\Blog\Services;

use Lambda\Blog\Contracts\Tag as TagContract;
use Lambda\Blog\Contracts\TagRepository as TagRepositoryContract;
use Lambda\Blog\Models\Tag;

class TagRepository implements TagRepositoryContract
{
    public function create(string $name, string $color): TagContract
    {
        return Tag::create([
            'name' => $name,
            'color' => $color,
        ]);
    }

    public function all(): array
    {
        return Tag::all();
    }
}
