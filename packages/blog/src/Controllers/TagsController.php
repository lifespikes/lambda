<?php

namespace Lambda\Blog\Controllers;

use Illuminate\Http\Request;
use Lambda\Blog\Contracts\Tag;
use Lambda\Blog\Contracts\TagRepository;
use LifeSpikes\LaravelBare\Http\Controller;

class TagsController extends Controller
{
    public function index(TagRepository $repository)
    {
        return $repository->all();
    }

    public function store(Request $request, TagRepository $repository)
    {
        return $repository->create(
            $request['name'],
            $request['color']
        );
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
    }
}
