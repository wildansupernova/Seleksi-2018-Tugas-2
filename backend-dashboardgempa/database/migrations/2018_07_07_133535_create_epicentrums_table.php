<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEpicentrumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('epicentrums', function (Blueprint $table) {
            $table->increments('id');
            $table->date('Date');
            $table->time('Time');
            $table->string('Latitude',255);
            $table->string('Longitude',255);
            $table->string('Depth',255);
            $table->double('Mag');
            $table->string('TypeMag',255);
            $table->string('smaj',255);
            $table->string('smin',255);
            $table->string('az',255);
            $table->string('rms',255);
            $table->string('cPhase',255);
            $table->string('Region',255);        
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
        Schema::dropIfExists('epicentrums');
    }
}
