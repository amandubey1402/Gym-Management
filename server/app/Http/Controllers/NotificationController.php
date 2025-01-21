<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NotificationModel;
class NotificationController extends Controller
{
    function notification(Request $req){
        $approval=new NotificationModel;
        $approval->name=$req["name"];
        $approval->Gender=$req["Gender"];
        $approval->DOB=$req["DOB"];
        $approval->mobile=$req['mobile'];
        $approval->experience=$req['experience'];
        if($approval->save()){
            return response()->json("Data is submitted");
        }
        else{
            return response()->json(["Error",500]);
        }
        
    }
    function GetApproval(){
        $tariners=NotificationModel::all();
        return response()->json($tariners);
    }
    function Specific($id){
        $tariners=NotificationModel::find($id);
        return response()->json($tariners);
    }
    function Delete($id){
        $approval=NotificationModel::find($id)->delete();
        return response()->json($approval);
    }
}
