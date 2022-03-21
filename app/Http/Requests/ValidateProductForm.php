<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateProductForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'article'      => 'required|alpha_num|unique',
            'name'         => 'required|min:10'
        ];
    }

    public function messages()
    {
        return [
            'article.required'   => 'Поле "Артикул" обязательно для заполнения.',
            'article.alpha_num'  => 'Поле "Артикул" должно содержать только латинские буквы и цифры',
            'article.unique'     => 'Поле "Артикул" должно быть уникальным',
            'name.required'      => 'Поле "Название" обязательно для заполнения',
            'name.min'           => 'Минимальная длина поля "Название" 10 символа'
        ];
    }
}
