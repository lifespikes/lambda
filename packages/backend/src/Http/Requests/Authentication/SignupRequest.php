<?php

namespace Lambda\Backend\Http\Requests\Authentication;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],

            'password' => ['required', 'confirmed'],
            'password_confirmation' => ['required'],
        ];
    }
}
