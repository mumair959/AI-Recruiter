<?php

namespace App\Http\Controllers;

use App\Models\EmploymentJob;
use App\Models\Candidate;
use App\Models\CandidateMatch;
use App\Services\AIService;

class CandidateMatchController extends Controller
{
    public function index(EmploymentJob $job, AIService $ai) {
        $candidates = Candidate::with('profile')->get();

        $matches = [];

        foreach ($candidates as $candidate) {

            if (!$candidate->profile) {
                continue;
            }

            $candidateData = [
                "skills" => $candidate->profile->skills ?? [],
                "seniority" => $candidate->profile->seniority,
                "experience_years" => $candidate->profile->experience_years ?? 0,
            ];

            $jobData = [
                "required_skills" => $job->required_skills ?? [],
                "seniority" => $job->seniority,
                "min_experience" => $job->min_experience ?? 0,
            ];

            $result = $ai->matchCandidate($candidateData, $jobData);

            $recommendation = $ai->generateRecommendation($result);

            $match = CandidateMatch::updateOrCreate(
                [
                    "candidate_id" => $candidate->id,
                    "employment_job_id" => $job->id,
                ],
                [
                    "score" => $result["score"],
                    "matched_skills" => $result["matched_skills"],
                    "missing_skills" => $result["missing_skills"],
                    "experience_match" => $result["experience_match"],
                    "seniority_match" => $result["seniority_match"],
                    'recommendation' => $recommendation['recommendation'] ?? null,
                    'summary' => $recommendation['summary'] ?? null,
                    'strengths' => $recommendation['strengths'] ?? [],
                    'weaknesses' => $recommendation['weaknesses'] ?? [],
                    'red_flags' => $recommendation['red_flags'] ?? [],
                    'confidence' => $recommendation['confidence'] ?? null,
                ]

            );

            $match->load(['candidate.profile']);

            $matches[] = $match;
        }

        usort($matches, fn($a, $b) => $b->score <=> $a->score);

        return response()->json($matches);

    }

    public function createMatch(EmploymentJob $job, Candidate $candidate, AIService $ai): CandidateMatch
    {
        $profile = $candidate->profile;

        $candidateData = [
            "skills" => $profile->skills ?? [],
            "seniority" => $profile->seniority,
            "experience_years" => $profile->experience_years ?? 0,
        ];

        $jobData = [
            "required_skills" => $job->required_skills ?? [],
            "seniority" => $job->seniority,
            "min_experience" => $job->min_experience ?? 0,
        ];

        $result = $ai->matchCandidate($candidateData, $jobData);

        $recommendation = $ai->generateRecommendation($result);

        $recommendation = $recommendation['recommendation'] ?? null;

        return CandidateMatch::updateOrCreate(
            [
                'candidate_id' => $candidate->id,
                'employment_job_id' => $job->id,
            ],
            [
                "score" => $result["score"],
                "matched_skills" => $result["matched_skills"],
                "missing_skills" => $result["missing_skills"],
                "experience_match" => $result["experience_match"],
                "seniority_match" => $result["seniority_match"],
                "recommendation" => $recommendation['recommendation'] ?? null,
                'summary' => $recommendation['summary'] ?? null,
                'strengths' => $recommendation['strengths'] ?? [],
                'weaknesses' => $recommendation['weaknesses'] ?? [],
                'red_flags' => $recommendation['red_flags'] ?? [],
                'confidence' => $recommendation['confidence'] ?? null,
            ]
        );
    }

    public function match(EmploymentJob $job, Candidate $candidate, AIService $ai)
    {
        return $this->createMatch($job, $candidate, $ai);
    }
}