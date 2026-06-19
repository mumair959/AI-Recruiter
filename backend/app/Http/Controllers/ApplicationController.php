<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\ApplicationActivity;
use Illuminate\Http\Request;
use DB;
use Illuminate\Validation\Rule;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Application::with([
            'candidate',
            'employmentjob'
        ])->latest()->paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'employment_job_id' => 'required|exists:employment_jobs,id',
            'candidate_id' => 'required|exists:candidates,id'
        ]);

        return DB::transaction(function () use ($validated) {
            $application = Application::create([
                ...$validated,
                'status' => 'Applied',
                'applied_at' => now()
            ]);

            ApplicationActivity::create([
                'application_id' => $application->id,
                'event' => 'Application Created'
            ]);

            return response()->json(
                $application,
                201
            );
        });

        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $application = Application::findOrFail($id);

        return $application->load([
            'candidate',
            'employmentJob',
            'activities',
            'notes'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function updateStatus(Request $request,Application $application)
    {
        $request->validate([
            'status' => [
                'required',
                Rule::in(['Applied','Screening','Interview','Shortlisted','Rejected','Hired'])
            ]
        ]);

        $oldStatus = $application->status;

        $application->update([
            'status' => $request->status
        ]);

        ApplicationActivity::create([
            'application_id' => $application->id,
            'event' => 'Status Changed',
            'metadata' => [
                'from' => $oldStatus,
                'to' => $request->status
            ]
        ]);

        return $application;
    }

    public function addNote( Request $request, Application $application)
    {
        $request->validate([
            'note' => 'required'
        ]);

        $note = $application
            ->notes()
            ->create([
                'note' => $request->note
            ]);

        return $note;
    }
}
