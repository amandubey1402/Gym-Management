<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\MemberController;
// UserController
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::middleware(['web'])->group(function () {
Route::post('/userdetail',[UserController::class,'UserRegister']);
Route::post('/UserLogin',[UserController::class,'Login']);
Route::post('/DeleteUser/{id}',[UserController::class,'Delete']);
Route::get('/getuser',[AdminController::class,'Users']);
Route::post('/addplan',[PlansController::class,'AddPlans']);
Route::get('/getplan',[PlansController::class,'getplan']);
Route::get('/deleteplan/{id}',[PlansController::class,'deleteplan']);
Route::get('/upadtedetail/{id}',[PlansController::class,'updatedetail']);
Route::post('/upadteplan/{id}',[PlansController::class,'update']);
Route::get("/Person",[UserController::class,'person']);
Route::post("/trainer",[TrainerController::class,'TrainerDetails']);
Route::get("/gettrainer",[TrainerController::class,'GetTrainer']);
Route::get("/removetrainer/{id}",[TrainerController::class,'DeleteTrainer']);
Route::get("/specifictrainer/{id}",[TrainerController::class,'SpecificTrainer']);
Route::post("/updatetrainer/{id}",[TrainerController::class,'UpdateTrainer']);
Route::post("/notify",[NotificationController::class,'notification']);
Route::get("/trainers",[NotificationController::class,'GetApproval']);
Route::get("/deletenotification/{id}",[NotificationController::class,'Delete']);
Route::get("/specific/{id}",[NotificationController::class,'Specific']);
Route::post("/member",[MemberController::class,'CreateMember']);
Route::get("/getmember",[MemberController::class,'GetMember']);
Route::get("/deletemember/{id}",[MemberController::class,'RemoveMember']);
Route::get("/specificmember/{id}",[MemberController::class,'SpecificMember']);

// });