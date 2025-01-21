<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
class UserController extends Controller
{
    function UserRegister(Request $req){
        $validated = $req->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string',
            'password' => 'required|min:6', 
            'phone' => 'required|string|max:10|min:10',
            'address' => 'required|string|max:255',
        ]);
            $user=new UserModel;
            $user->first_name=$req["first_name"];
            $user->last_name=$req["last_name"];
            $user->email=$req["email"];
            $user->password=$req["password"];
            $user->phone=$req["phone"];
            $user->address=$req["address"];
            if ($user->save()) {
                return response()->json([
                    'message' => 'Sign Up Successful'
                ], 201);  // HTTP status 201 for resource creation
            } else {
                return response()->json([
                    'message' => 'Sign Up Unsuccessful'
                ], 500); 
            }
    }
    function Login(Request $req){
        $email=$req["email"];
        $password=$req["password"];
        $user=UserModel::where('email',$email)->where('password',$password)->first();
        if($user){
           $se1= session()->put("user_id",$user->id);
            $se2=session()->put("role",$user->role);
            return response()->json($user);
            // return response()->json($user);
        }
        else{
            return response()->json(["User Not Found"],302);
        }
    }
    function Delete($id){
        $user=UserModel::find($id)->delete();
        if($user){
            return response()->json(["User IS deleted"]);
        }
        else{
            return response()->json(["User IS not deleted"],302);
        }
    }
    function person(){
        $person = UserModel::where('role', '!=', 'Admin')->get();
        return response()->json($person);
    }
}
