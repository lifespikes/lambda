<?php

namespace Lambda\Authentication\Exceptions;

use Exception;
use Illuminate\Http\Response;

class IdentityInUseException extends Exception
{
    public function render(): Response
    {
        return response([
            'message' => 'This social profile is already in use.',
        ], 422);
    }
}
