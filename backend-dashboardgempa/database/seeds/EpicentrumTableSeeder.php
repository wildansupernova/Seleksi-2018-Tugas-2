<?php

use Illuminate\Database\Seeder;
use App\Epicentrum;
class EpicentrumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = 0;
        print("Wipe Current data\n");
        DB::table('epicentrums')->delete();
        print("Load JSON data\n");
        $json = File::get("database/data/hasilJson.json");
        $data = json_decode($json);
        print("Load to SQL\n");
        foreach ($data as $obj) {
            $count++;
            echo($count."\n");
            Epicentrum::create(array(
                'Date' => $obj->Date,
                'Time' => $obj->Time,
                'Latitude' => $obj->Latitude,
                'Longitude' => $obj->Longitude,
                'Depth' => $obj->Depth,
                'Mag' => doubleval($obj->Mag),
                'TypeMag' => $obj->TypeMag,
                'smaj' => $obj->smaj,
                'smin' => $obj->smin,
                'az' => $obj->az,
                'rms' => $obj->rms,
                'cPhase' => $obj->cPhase,
                'Region' => $obj->Region  
            ));
        }
        //
    }
}
