<?php

namespace Lambda\Backend\Http\Requests\Authentication;

use Illuminate\Foundation\Http\FormRequest;
use PayrollGoat\Support\Rules\PhoneNumber;

class VerificationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'phone_number' => [
                'required',
                'digits:10',
                new PhoneNumber(), // TODO: Revisar si debemos eliminar esta parte de # telefonico
                'unique:users,phone_number',
            ],
        ];
    }
}

