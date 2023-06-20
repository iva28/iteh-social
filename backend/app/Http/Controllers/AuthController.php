<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request, AuthService $service)
    {
        $success = $service->login($request);
        if ($success) return new UserResource(Auth::user());
        else   return response()->json(['success' => false]);
    }

    public function register(RegistrationRequest $request, AuthService $service)
    {
        $user = $service->register($request);
        $service->loginUser($user);
        return response()->json(['success' => true]);
    }

    public function logout(AuthService $service, Request $req)
    {
        $service->logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return response()->json(['success' => true]);
    }
}
