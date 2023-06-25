<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\PostSeeder;
use Database\Seeders\LikeSeeder;
use Database\Seeders\CommentSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $userSeeder = new UserSeeder();
        $userSeeder -> run();

        $postSeeder = new PostSeeder();
        $postSeeder -> run();
        
        $friendSeeder = new FriendSeeder();
        $friendSeeder -> run();

        $commentSeeder = new CommentSeeder();
        $commentSeeder -> run();

        $likeSeeder = new LikeSeeder();
        $likeSeeder -> run();
        
        $admin = [
            'username' => "admin",
            'password' => Hash::make("password"),
        ];

        DB::table('admins')->insert($admin);

    }
}
