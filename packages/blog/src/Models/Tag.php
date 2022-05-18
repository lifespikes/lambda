<?php

namespace Lambda\Blog\Models;

use Illuminate\Database\Eloquent\Model;
use Lambda\Blog\Contracts\Tag as TagContract;

class Tag extends Model implements TagContract
{
    public function name(): string
    {
        return $this->name;
    }

    public function color(): string
    {
        return $this->color;
    }
}
