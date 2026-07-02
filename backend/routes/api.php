<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateMatchController;
use App\Http\Controllers\EmploymentJobController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('jobs', EmploymentJobController::class);

    Route::apiResource('candidates', CandidateController::class);
    Route::post('/candidates/{candidate}/resume', [CandidateController::class, 'uploadResume']);
    Route::get('/candidates/{candidate}/profile', [CandidateController::class, 'profile']);

    Route::apiResource('applications', ApplicationController::class);
    Route::patch('/applications/{application}/status', [ApplicationController::class, 'updateStatus']);
    Route::post('/applications/{application}/notes', [ApplicationController::class, 'addNote']);

    Route::post('/jobs/{job}/match/{candidate}', [CandidateMatchController::class, 'match']);
    Route::get('jobs/{job}/matches', [CandidateMatchController::class, 'index']);
});