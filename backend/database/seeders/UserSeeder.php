<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // User::truncate();
          User::factory()->count(7)->create();
        // $users = [
        //     [
        //         'username' => 'ivaiva',
        //         'password' => bcrypt('ivaiva'),
        //         'name' => 'Iva',
        //         'surname' => 'Ivin',
        //         'bio' => '',
        //         'date_birth' => '1990-01-01',
        //     ],
        //     [
        //         'username' => 'nikolanikola',
        //         'password' => bcrypt('nikolanikola'),
        //         'name' => 'Nikola',
        //         'surname' => 'Nikin',
        //         'bio' => 'student',
        //         'date_birth' => '2000-05-10',
        //     ],
        //     // Dodajte ostale korisnike sa željenim podacima
        // ];

        // foreach ($users as $userData) {
        //     User::create($userData);
        // }

    }
}
