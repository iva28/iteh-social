<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//pravimo rutu za registraciju
Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:web')->group(function () {

    Route::get('/posts', [PostController::class, 'getAll']);
    Route::get('/myPosts', [PostController::class, 'getMy']);
    Route::get('/friend/getAll', [FriendController::class, 'getAll']);
    Route::get('/friend/getNoFriends', [FriendController::class, 'getNoFriends']);
    Route::post('/friend/addFriends/{friend}', [FriendController::class, 'addFriends']);
    Route::post('/like/{post}', [PostController::class, 'addLike']);
    Route::get('/comments/{post}', [PostController::class, 'getAllComments']);
    Route::post('/comments/{post}', [PostController::class, 'addComment']);

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user/{user}', [UserController::class, 'getUser']);

    Route::get('/currentUser', [UserController::class, 'getCurrentUser']);
    Route::delete('/delete', [UserController::class, 'deleteUser']);


    Route::post('/addPost', [PostController::class, 'addPost']);


       //dodavanje rute za nelajkovane postove
       Route::get('/posts/notLiked', [PostController::class, 'getAllNotLiked']);

       //dodavanje rute za postove odredjenog korisnika
       Route::get('/posts/{user}', [PostController::class, 'getAllPostUserSent']);
    
       //pronalazak korisnika na osnovu id
       Route::get('/user/friend/{id}', [UserController::class, 'getUserById']);
    
       //pronalazak korisnika na osnovu imena
       Route::get('/users/{name}', [UserController::class, 'getUserSearch']);
    
    
       //ruta za pronalazak postova na osnovu imena
       Route::get('/posts/user/{name}', [PostController::class, 'getPostsSearch']);
}

);


Route::post('/loginAdmin', [AuthController::class, 'loginAdmin']);

Route::middleware('auth:admin')->group(function () {
    Route::get('/allUsers', [UserController::class, 'getAllUsers']);
    Route::delete('/delete/user/{user}', [UserController::class, 'deleteUserId']);
    Route::post('/logoutAdmin', [AuthController::class, 'logoutAdmin']);
   
}
);
