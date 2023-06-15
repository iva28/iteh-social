<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Services\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAll(PostService $service)
    {
        return PostResource::collection($service->getAll());
    }

    public function getMy(PostService $service)
    {
        return PostResource::collection($service->getMy());
    }
}
