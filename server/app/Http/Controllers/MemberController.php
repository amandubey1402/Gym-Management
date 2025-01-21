<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MemberModel;
use App\Models\UserModel;
use App\Models\PlansModel;
class MemberController extends Controller
{

    function CreateMember(Request $req){
        $member=MemberModel::Where("userid",$req["userid"])->get();
        if($member){
           return response()->json("One member can get only one plan at a time") ;
        }
        else{
            $member=new MemberModel;
            $member->userid=$req["userid"];
            $member->planid=$req["planid"];
            
            if($member->save()){
                return response()->json("You can get the membership once the admin accepted") ;
            }
        }
    }
    function GetMember(){
        $members = MemberModel::all();
        $users = [];
        $plans=[];
        foreach ($members as $member) {
            $user = UserModel::where("id", $member->userid)->first();
            $plan = PlansModel::where("id", $member->planid)->first();
            $users[] = $user;
            $plans[]=$plan;
        }
        return response()->json(compact('users','plans','members')); 
    }
    function RemoveMember($id){
        $members = MemberModel::find($id)->delete();
        return response()->json("Member is removed");

    }
    function SpecificMember($id){
        $member=MemberModel::Where("userid",$id)->first();
        // return $member;
        if($member){
            $user=UserModel::Where("id",$member->userid)->first();
            $membership=PlansModel::Where("id",$member->planid)->first();
            return response()->json(compact('user','membership'));
        }
        else{
            return null;
        }
        // $membership=PlansModel::Where();
    }
}
