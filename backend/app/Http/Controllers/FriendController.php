<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
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
}
