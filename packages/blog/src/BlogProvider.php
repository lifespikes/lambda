<?php

namespace Lambda\Blog;

use Illuminate\Support\ServiceProvider;
use Lambda\Blog\Contracts\Tag as TagContract;
use Lambda\Blog\Contracts\TagRepository as TagRepositoryContract;
use Lambda\Blog\Models\Tag;
use Lambda\Blog\Services\TagRepository;

class BlogProvider extends ServiceProvider
{
    public function register()
    {
        $this->loadMigrationsFrom(__DIR__.'/../migrations');

        $this->app->bind(TagContract::class, Tag::class);
        $this->app->bind(TagRepositoryContract::class, TagRepository::class);
    }

    public function boot()
    {
    }
}
