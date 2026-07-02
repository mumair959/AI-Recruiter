<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CandidateMatch extends Model
{
    protected $fillable = [
        'candidate_id',
        'employment_job_id',
        'score',
        'matched_skills',
        'missing_skills',
        'recommendation',
        'experience_match',
        'seniority_match'
    ];

    protected $casts = [
        'matched_skills' => 'array',
        'missing_skills' => 'array',
        'experience_match'=>'boolean',
        'seniority_match'=>'boolean'
    ];
    
    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function employmentJob()
    {
        return $this->belongsTo(EmploymentJob::class, 'employment_job_id');
    }
}
