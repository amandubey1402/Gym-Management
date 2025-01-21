<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PlansModel;
class PlansController extends Controller
{
    function Addplans(Request $req){
        $Plans=new PlansModel;
        $Plans->Price=$req["Price"];
        $Plans->feature1=$req["feature1"];
        $Plans->feature2=$req["feature2"];
        $Plans->feature3=$req["feature3"];
        $Plans->feature4=$req["feature4"];
        $Plans->feature5=$req["feature5"];
        $action=$Plans->save();
        if($action){
            return response()->json("Plans Added",200);
        }
        else{
            return response()->json("Plans not Added",500);
        }
    }
    function getplan(){
        $Plans=PlansModel::all();
        return response()->json($Plans);
    }
    function deleteplan($id){
        return PlansModel::find($id)->delete();
    }
    function updatedetail($id){
        $deatils= PlansModel::find($id);
        return response()->json($deatils);
    }
    function update($id,Request $req){
        $data=PlansModel::find($id);
        $data->Price=$req['Price'];
        $data->feature1=$req['feature1'];
        $data->feature2=$req['feature2'];
        $data->feature3=$req['feature3'];
        $data->feature4=$req['feature4'];
        $data->feature5=$req['feature5'];
        $data->save();
    }
}
