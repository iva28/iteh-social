<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Friend>
 */
class FriendFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'first_user_id' => $this -> faker -> numberBetween(1, User::count() -1),
            'second_user_id' => $this -> faker -> numberBetween(1, User::count() -1)
        ];
    }
}
