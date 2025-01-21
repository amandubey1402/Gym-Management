<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\UserModel;
class AdminController extends Controller
{
    function Users(){
        $data=UserModel::all();
        return response()->json($data);
    }
}
