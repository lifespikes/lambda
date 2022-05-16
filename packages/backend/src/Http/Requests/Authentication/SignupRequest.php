<?php

namespace Lambda\Backend\Http\Requests\Authentication;

use Illuminate\Foundation\Http\FormRequest;
use Lamnda\Support\Rules\PhoneNumber;

class SignupRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'business_name' => ['required'],
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'phone_number' => [  // TODO: revisar si se debe eliminar esta parte de #
                'bail',
                'required',
                'digits:10',
                'unique:users,phone_number',
                new PhoneNumber(),
            ],
            'verification' => [
                'required',
                'digits:6',
            ],
        ];
    }
}
