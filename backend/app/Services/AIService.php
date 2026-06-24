<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class AIService
{
    public function parseResume(string $filePath)
    {
        return Http::timeout(180)
        ->connectTimeout(10)
        ->attach(
            'file',
            file_get_contents($filePath),
            basename($filePath)
        )
        ->post(config('ai.ai_service_url') . '/api/resume/parse')
        ->json();
    }

    public function analyzeJob(string $title,string $description, string $requirements)
    {
        return Http::timeout(180)
        ->post(config('ai.ai_service_url').'/api/job/analyze',
            [
                'title' => $title,
                'description' => $description,
                'requirements' => $requirements,
            ]
        )
        ->json();
    }

    public function matchCandidate(array $candidate, array $job)
    {
        return Http::timeout(180)
            ->post(
                config('ai.ai_service_url').'/api/matching/match',
                [
                    'candidate'=>$candidate,
                    'job'=>$job
                ]
            )
            ->json();
    }

    public function generateRecommendation(array $matchData)
    {
        return Http::timeout(180)
            ->post(config('ai.ai_service_url'). '/api/recommendation/generate', $matchData)
            ->json();
    }
}