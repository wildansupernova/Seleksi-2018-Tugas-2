<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Epicentrum;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

class DataController extends Controller
{

    private function strToCarbonDate(string $str){
        $date = explode("-", $str);
        return Carbon::createFromDate(intval($date[0]), intval($date[1]), intval($date[2]),'Asia/Jakarta');
    }

    private function calculateDataDays(Request $request,int $days) {
        $fromDate = $this->strToCarbonDate($request->fromDate);
        $toDate = $this->strToCarbonDate($request->toDate);


        $totalDays = intval($toDate->diffInDays($fromDate)+1 );
        $totalPage = $totalDays % $days == 0 ? intdiv($totalDays,$days) : intdiv($totalDays,$days) + 1 ;

        $page = !$request->has('page') ? 1 : $page = intval($request->page);
        $page = $page > $totalPage ? $totalPage : $page ;

        $fromDateQuery = $fromDate->copy()->addDays($days*($page-1));
        $toDateQuery = $page == $totalPage ? $toDate : $fromDateQuery->copy()->addDays($days-1);

        $query = 'SELECT * FROM epicentrums WHERE Date BETWEEN ';
        $query = $query."'".$fromDateQuery->toDateString()."'".' AND '."'".$toDateQuery->toDateString()."'";

        return [
            "data" => DB::select($query),
            "totalPage" => $totalPage,
            "pageNow" => $page,
            "fromDateNow" => $fromDateQuery->toDateString(),
            "toDateNow" => $toDateQuery->toDateString(),
            "fromDate" => $fromDate->toDateString(),
            "toDate" => $toDate->toDateString(),
        ];

    }

    public function generateDataFromDateQuery(Request $request) {


        $hasilBalikan = [];

        switch ($request->intervalType) {
            case 'days':
                $hasilBalikan = $this->calculateDataDays($request,$request->interval);
                break;
            case 'weeks':
                $hasilBalikan = $this->calculateDataDays($request,$request->interval*7);
                break;
            case 'months':
                $hasilBalikan = $this->calculateDataDays($request,$request->interval*30);
                break;
        }

        return json_encode($hasilBalikan);
    }


    public function test(Request $request){
        $dt = Carbon::today()->addMonth(2);
        $dt->setTimezone('Asia/Jakarta');
        echo $dt->toDateString();
    }
}
