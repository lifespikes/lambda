<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class() extends Migration {
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('name');

            $table->string('email')->nullable();
            $table->string('password')->nullable();

            $table->string('avatar')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};
