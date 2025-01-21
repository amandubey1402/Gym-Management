<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trainers', function (Blueprint $table) {
            $table->id();
            $table->String("name");
            $table->String("Gender");
            $table->String("DOB");
            $table->String("mobile");
            $table->String("experience");
            $table->String("salary");
            $table->String("shift");
            $table->String("role")->Default("Trainer");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_trainers');
    }
};
