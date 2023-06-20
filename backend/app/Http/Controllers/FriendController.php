<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Services\FriendService;

class FriendController extends Controller
{
    public function getAll(FriendService $service)
    {
        return UserResource::collection($service->getAll());
    }

    public function getNoFriends(FriendService $service)
    {
        return UserResource::collection($service->getNoFriends());
    }

    public function addFriends(User $friend, FriendService $service)
    {
        //laravel automatski vadi id iz rute i pretvara u model
        $service->addFriends($friend->id);
        return response()->json(['success' => TRUE]);
    }
}
