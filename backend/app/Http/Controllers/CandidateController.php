<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\CandidateProfile;
use Illuminate\Http\Request;
use App\Services\AIService;
use DB;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Candidate::latest()->paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['nullable']
        ]);

        $candidate = Candidate::create($validated);

        return response()->json($candidate, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $candidate = Candidate::findOrFail($id);

        return $candidate->load([
            'applications.job',
            'profile'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $candidate = Candidate::findOrFail($id);

        $candidate->update(
            $request->only([
                'name',
                'email',
                'phone'
            ])
        );

        return $candidate;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $candidate = Candidate::findOrFail($id);
        
        $candidate->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }

    public function uploadResume(Request $request, Candidate $candidate)
    {
        $request->validate([
            'resume' => [
                'required',
                'file',
                'mimes:pdf'
            ]
        ]);

        $ai = app(AIService::class);

        $path = $request->file('resume')->store('resumes', 'public');

        $fullPath = storage_path('app/public/' . $path);

        $parsed = $ai->parseResume($fullPath);

        return DB::transaction(function () use ($candidate, $path, $parsed) {
            $candidate->update([
                'resume_path' => $path
            ]);

            CandidateProfile::updateOrCreate(
                [
                    'candidate_id' => $candidate->id
                ],
                [
                    'parsed_resume' => $parsed['text'],
                    'email' => $parsed['email'],
                    'phone' => $parsed['phone'],
                    'skills'=> $parsed['skills'],
                    'education'=> $parsed['education'],
                    'experience'=> $parsed['experience'],
                    'ai_summary' => $parsed['summary'],
                    'seniority' => $parsed['seniority'],
                    'strengths' => $parsed['strengths'],
                    'recommended_roles' => $parsed['recommended_roles'],
                    'experience_years' => $parsed['experience_years'] ?? 0,
                ]
            );

            return response()->json([
                'path' => $path
            ]);
        });
    }

    public function profile(Candidate $candidate)
    {
        return $candidate->load('profile');
    }
}
