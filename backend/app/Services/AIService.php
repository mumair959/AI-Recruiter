<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class AIService
{
    public function parseResume(string $filePath)
    {
        return Http::attach(
            'file',
            file_get_contents($filePath),
            basename($filePath)
        )
        ->post(config('ai.ai_service_url') . '/api/resume/parse')
        ->json();
    }
}