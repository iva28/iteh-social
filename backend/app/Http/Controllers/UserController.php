<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Post;
use App\Models\User;
use App\Services\PostService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUser(User $user)
    {
        return new UserResource($user);
    }

    public function getCurrentUser()
    {
        return new UserResource(Auth::user());
    }

    public function deleteUser(UserService $service, Request $req) {
        $service->deleteUser();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return response()->json(['success' => true]);
    }
  
    public function getUserSearch(UserService $service, string $name)  {
        return $service->getUserSearch($name);
    }

    public function getUserById(UserService $service, User $user) {
        return $service->getUserById($user->id);
    }

    function getAllUsers() {
        return UserResource::collection(User::all());
    }

    function deleteUserId(User $user)  {
         $user->delete();
         return response()->json(['success' => true]);
    }
}
