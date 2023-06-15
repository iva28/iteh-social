<?php

namespace App\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostService
{
    private FriendService $service;

    public function __construct(FriendService $service)  {
        $this->service = $service;
    }

    public function getAll()
    {
        //get izvrsava upit
        //with smanjuje broj upita - unapred povlaci sve komentare z postove i broji lajkove
        /**@var User */
        $user = Auth::user();
        return Post::whereIn('user_id', $this->service->getFriendsIds())
            ->with('comments')->withCount('likes')->get();
    }

    public function getMy()
    {
        /**@var User */
        $user = Auth::user();
        return $user->posts();
    }
}
