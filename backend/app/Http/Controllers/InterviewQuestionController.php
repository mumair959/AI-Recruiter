<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\InterviewQuestion;
use App\Services\AIService;

class InterviewQuestionController extends Controller
{
    public function show(Application $application)
    {
        return response()->json(
            $application->interviewQuestion
        );
    }

    public function generate(Application $application,AIService $ai) {

        if ($application->interviewQuestion) {
            return $application->interviewQuestion;
        }

        $candidate = $application->candidate;
        $profile = $candidate->profile;
        $job = $application->employmentJob;
        $match = $application->candidate_match;

        $candidateData = [
            "skills" => $profile->skills ?? [],
            "experience_years" => $profile->experience_years ?? 0,
            "seniority" => $profile->seniority,
        ];

        $jobData = [
            "required_skills" => $job->required_skills ?? [],
            "min_experience" => $job->min_experience ?? 0,
            "seniority" => $job->seniority,
        ];

        $matchData = [
            "score" => $match->score,
            "matched_skills" => $match->matched_skills,
            "missing_skills" => $match->missing_skills,
            "experience_match" => $match->experience_match,
            "seniority_match" => $match->seniority_match,
        ];

        $result = $ai->generateInterviewQuestions(
            $candidateData,
            $jobData,
            $matchData
        );

        return InterviewQuestion::create([
            "application_id" => $application->id,
            "technical_questions" => $result["technical_questions"],
            "behavioral_questions" => $result["behavioral_questions"],
            "follow_up_questions" => $result["follow_up_questions"],
            "evaluation_notes" => $result["evaluation_notes"],
        ]);
    }
}