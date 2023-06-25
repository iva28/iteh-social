<?php

namespace App\Services;

use App\Models\Friend;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FriendService
{

  public function getAll()
  {
    /**@var User */
    $user = Auth::user();
    return $user->friendsFirstColumn->concat($user->friendsSecondColumn);
  }

  public function getNoFriends()
  {
    return  User::whereNotIn('id', $this->getFriendsIds())->limit(10)->get();
  }
  public function getFriendsIds()
  {
    $user = Auth::id();
    $ids_first = Friend::where('first_user_id', "=", $user)->pluck('second_user_id');
    $ids_second = Friend::where('second_user_id', "=", $user)->pluck('first_user_id');
    $temp = $ids_first->concat($ids_second);
    $temp->push($user);
    return $temp;
  }

  public function addFriends(int $id)
  {
    if (Auth::id() == $id)
      return null;
    return Friend::firstOrCreate(['first_user_id' => Auth::id(), 'second_user_id' => $id]);
  }
}
