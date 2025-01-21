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
        Schema::create('_premium_plan', function (Blueprint $table) {
            $table->id();
            $table->String('Price');
            $table->String('feature1');
            $table->String('feature2');
            $table->String('feature3');
            $table->String('feature4');
            $table->String('feature5');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_premium_plan');
    }
};
