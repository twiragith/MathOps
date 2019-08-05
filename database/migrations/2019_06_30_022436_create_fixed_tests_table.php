<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFixedTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fixed_tests', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('test_id');
            $table->integer('correct_answers');
            $table->integer('questions');
            $table->float('accuracy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fixed_tests');
    }
}
