<?php

namespace App\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService {

    public function login(LoginRequest $request, string $guard) : bool {
        return Auth::guard($guard)->attempt($credentials = ['username'=> $request->string('username'), 'password' => $request->string('password')]);
    }

    public function register(RegistrationRequest $request) {
       return User::create(array_merge($request->validated(), [
        'password' => Hash::make($request->input('password'))
       ]));
    }

    public function logout(string $guard) {
        Auth::guard($guard)->logout();
    }

    
    public function loginUser(User $user) {
        Auth::login($user);
    }
}


