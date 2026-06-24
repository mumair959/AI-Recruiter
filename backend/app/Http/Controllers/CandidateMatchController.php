<?php

namespace App\Http\Controllers;

use App\Models\EmploymentJob;
use App\Models\Candidate;
use App\Models\CandidateMatch;
use App\Services\AIService;

class CandidateMatchController extends Controller
{
    public function match(EmploymentJob $job, Candidate $candidate, AIService $ai)
    {
        $profile = $candidate->profile;

        $candidateData = [
            "skills" => $profile->skills ?? [],
            "seniority" => $profile->seniority,
            "experience_years" => $profile->experience_years ?? 0
        ];

        $jobData = [
            "required_skills" => $job->required_skills ?? [],
            "seniority" => $job->seniority,
            "min_experience" => $job->min_experience ?? 0
        ];

        $result = $ai->matchCandidate($candidateData, $jobData);

        $recommendation = $ai->generateRecommendation($result);

        $match = CandidateMatch::create([
            "candidate_id" => $candidate->id,
            "employment_job_id" => $job->id,
            "score" => $result["score"],
            "matched_skills" => $result["matched_skills"],
            "missing_skills" => $result["missing_skills"],
            "experience_match" => $result["experience_match"],
            "seniority_match" => $result["seniority_match"],
            'recommendation' => $recommendation['recommendation'] ?? null,
        ]);

        return $match;
    }
}