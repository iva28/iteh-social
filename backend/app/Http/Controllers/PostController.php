<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Requests\PostRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PostResource;
use App\Models\Post;
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

    public function addLike(PostService $service, Post $post)
    {
        $service->addLike($post->id);
        return response()->json(['success' => TRUE]);
    }

    public function getAllComments(PostService $service, Post $post)
    {
        return CommentResource::collection($service->getAllComments($post->id));
    }

    public function addComment(PostService $service, Post $post, CommentRequest $comment)
    {
        return $service->addComment($post->id, $comment);
    }

    public function addPost(PostService $service, PostRequest $post)
    {
        return $service->addPost($post);
    }
}
