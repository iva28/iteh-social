<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

use App\Http\Resources\AdminResource;

class AuthController extends Controller
{
    public function login(LoginRequest $request, AuthService $service)
    {
        $success = $service->login($request, 'web');
        if ($success) return new UserResource(Auth::user());
        else   return response()->json(['success' => false]);
    }
    public function loginAdmin(LoginRequest $request, AuthService $service)
    {
        $success = $service->login($request, 'admin');
        if ($success) return new AdminResource(Auth::guard('admin')->user());
        else   return response()->json(['success' => false]);
    }


    public function register(RegistrationRequest $request, AuthService $service)
    {
        $user = $service->register($request);
        $service->loginUser($user);
        return new UserResource(Auth::user());
    }

    public function logout(AuthService $service, Request $req)
    {
        $service->logout('web');
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return response()->json(['success' => true]);
    }

    public function logoutAdmin(AuthService $service, Request $req)
    {
        $service->logout('admin');
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return response()->json(['success' => true]);
    }

}
