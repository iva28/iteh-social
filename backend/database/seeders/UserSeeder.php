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
        User::factory()->create( [
          'username' => "iva28",
          'name' => 'Iva',
          'surname' => 'Stanisic',
        ]);

        User::factory()->create( [
          'username' => "ninanina",
          'name' => 'Nina',
          'surname' => 'Pantelic',
        ]);

        User::factory()->create( [
          'username' => "milosmilos",
          'name' => 'Milos',
          'surname' => 'Popovic',
        ]);
          User::factory()->count(20)->create();
        

    }
}
