<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'article' => Str::random(5) . '-' . $this->faker->randomNumber(5, true) . '/' . $this->faker->unixTime(),
            'name'    => $this->faker->word,
            'status'  => $this->faker->randomElement([
                '1', 
                '0'
            ]),
            'data'    => [
                'цвет'    => $this->faker->safeColorName,
                'размер'  => $this->faker->randomElement([
                    'XS', 'S', 'M', 'L', 'XL', 'XXL'
                ])
            ]
        ];
    }
}
