<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFixedTestsTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fixed_tests_types', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('admin_id')->unsigned();;
            $table->string('test_name');
            $table->text('test_description');
            $table->integer('fix_no_of_quiz')->unsigned();
            $table->integer('multiple_op_fix')->unsigned();
            $table->integer('single_op_mode_fix')->unsigned();
            $table->integer('single_op_fix')->unsigned();
            $table->integer('mathOps_min_fix')->unsigned();
            $table->integer('mathOps_max_fix')->unsigned();
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
        Schema::dropIfExists('fixed_tests_types');
    }
}
