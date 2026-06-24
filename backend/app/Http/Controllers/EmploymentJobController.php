<?php

namespace App\Http\Controllers;

use App\Models\EmploymentJob;
use Illuminate\Http\Request;
use App\Services\AIService;
use DB;

class EmploymentJobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EmploymentJob::latest()->paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        return DB::transaction(function () use ($request) {
            $job = EmploymentJob::create($request->all());

            $ai = app(AIService::class);
    
            $analysis = $ai->analyzeJob($job->title, $job->description, $job->requirements);

            $job->update([
                'required_skills' => $analysis['required_skills'],
                'preferred_skills' => $analysis['preferred_skills'],
                'min_experience' => $analysis['min_experience'],
                'seniority' => $analysis['seniority'],
            ]);
            return response()->json($job);
        });

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return EmploymentJob::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $job = EmploymentJob::findOrFail($id);

        $job->update($request->all());

        return response()->json($job);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $job = EmploymentJob::findOrFail($id);
        
        $job->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }
}
