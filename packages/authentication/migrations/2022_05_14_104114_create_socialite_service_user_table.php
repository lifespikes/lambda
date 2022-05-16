<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    public function up()
    {
        Schema::create('socialite_service_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('provider_name');
            $table->string('provider_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('socialite_service_user');
    }
};
