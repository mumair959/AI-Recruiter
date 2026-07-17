<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InterviewQuestion extends Model
{
    protected $fillable = [
        'application_id',
        'technical_questions',
        'behavioral_questions',
        'follow_up_questions',
        'evaluation_notes',
    ];

    protected $casts = [
        'technical_questions' => 'array',
        'behavioral_questions' => 'array',
        'follow_up_questions' => 'array',
    ];

    public function application()
    {
        return $this->belongsTo(Application::class);
    }
}
