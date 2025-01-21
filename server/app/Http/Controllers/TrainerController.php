<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TrainerModel;
class TrainerController extends Controller
{
    function TrainerDetails(Request $req){
        $trainer=new TrainerModel;  
        $trainer->name=$req['name'];
        $trainer->Gender=$req['Gender'];
        $trainer->DOB=$req['DOB'];
        $trainer->mobile=$req['mobile'];
        $trainer->experience=$req['experience'];
        $trainer->salary=$req['salary'];
        $trainer->shift=$req['shift'];
        $trainer->save();
    }
    function GetTrainer(){
        $trainer=TrainerModel::all();
        return response()->json($trainer);
    }
    function DeleteTrainer($id){
        $trainer=TrainerModel::find($id)->delete();
        return response()->json("Trainer Removed");
    }
    function SpecificTrainer($id){
        $trainer=TrainerModel::find($id);
        return response()->json($trainer);
    }
    function UpdateTrainer(Request $req , $id){
        $trainers=TrainerModel::find($id);
        if(!$trainers){
            return response()->json("no trainer found");
        }
        $trainers->salary=$req['salary'];
        $trainers->shift=$req['shift'];
        $trainers->save();
    }
   
}
