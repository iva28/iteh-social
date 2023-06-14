<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
       
        return [
            'body' => $this -> faker -> sentence($nbWords = 8,  $variableNbWords = true),
            'image' => $this -> faker ->imageUrl(360, 360, 'animals', true, 'dogs', true, 'jpg'),
            'user_id' => $this -> faker -> numberBetween(1, User::count())
        ];
    }
}
