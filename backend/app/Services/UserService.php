<?php

namespace App\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserService {

    public function deleteUser() {
         Auth::user()->delete();
         Auth::logout();
    }
    
    public function getUserSearch(string $name) {
        return User::where('name', $name) -> get();
    }

    public function getUserById(int $id) {
        return User::where('id', $id) -> get();
    }
}


