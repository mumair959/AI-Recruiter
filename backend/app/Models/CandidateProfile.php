<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CandidateProfile extends Model
{
    protected $fillable = [
        'candidate_id',
        'skills',
        'education',
        'experience',
        'parsed_resume',
        'email',
        'phone',
        'ai_summary',
        'strengths',
        'recommended_roles',
        'seniority',
        'experience_years'
    ];

    protected $casts = [
        'skills' => 'array',
        'education' => 'array',
        'experience' => 'array',
        'strengths' => 'array',
        'recommended_roles' => 'array',
    ];

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }
}
