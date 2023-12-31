<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use  HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'password',
        'name',
        'surname',
        'date_birth',
        'bio'
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'date_birth' => "date",
        //'password' => "hashed",
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function friendsFirstColumn() {
        return $this->hasManyThrough(User::class, Friend::class, 'first_user_id', 'id', 'id', 'second_user_id');
    }

    public function friendsSecondColumn() {
        return $this->hasManyThrough(User::class, Friend::class, 'second_user_id', 'id', 'id', 'first_user_id');
    }
}
