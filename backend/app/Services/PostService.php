<?php

namespace App\Services;

use App\Http\Requests\CommentRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\PostRequest;
use App\Models\Comment;
use App\Models\Like;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostService
{
    private FriendService $service;

    public function __construct(FriendService $service)
    {
        $this->service = $service;
    }

    public function getAll()
    {
        //get izvrsava upit
        //with smanjuje broj upita - unapred povlaci sve komentare z postove i broji lajkove
        /**@var User */
        $user = Auth::user();
        return Post::whereIn('user_id', $this->service->getFriendsIds())
            ->withCount('comments')->withCount('likes')->with('likes')->where('user_id', '!=', $user->id)->get();
    }

    public function getMy()
    {
        /**@var User */
        $user = Auth::user();
        return $user->posts()->latest()->get();
    }

    public function addLike(int $post_id)
    {
        $user_id = Auth::id();
        $signal =  Like::where('user_id', $user_id)->where('post_id', $post_id)->first();
        if ($signal) $signal->delete();
        else Like::create(['user_id' => $user_id, 'post_id' => $post_id]);
    }

    public function getAllComments(int $post_id)
    {
        return Comment::where('post_id', $post_id)->with('user')->get();
    }
    public function addComment(int $post_id, CommentRequest $request)
    {
        return Comment::create(['user_id' => Auth::id(), 'post_id' => $post_id, 'content' => $request->input('content')]);
    }

    public function addPost(PostRequest $request)
    {
        return Post::create(['user_id' => Auth::id(), 'body' => $request->input('content')]);
    }
    
}
