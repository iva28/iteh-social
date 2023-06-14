<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function login(LoginRequest $request, AuthService $service)  {
        $success = $service->login($request);
        return response()->json(['success' => $success]);
    }

    public function register(RegistrationRequest $request, AuthService $service) {
       $user = $service->register($request);
       $service->loginUser($user);
       return response()->json(['success' => true]);
    }

    public function logout(AuthService $service) {
       $service->logout();
       return response()->json(['success' => true]);
    }
}
