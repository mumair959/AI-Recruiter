<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmploymentJob extends Model
{
    protected $fillable = [
        'title',
        'department',
        'location',
        'experience_years',
        'description',
        'requirements',
        'status',
        'required_skills',
        'preferred_skills',
        'min_experience',
        'seniority'
    ];

    protected $casts = [
        'required_skills' => 'array',
        'preferred_skills' => 'array',
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function candidates()
    {
        return $this->belongsToMany(Candidate::class,'applications');
    }

    public function matches() {
        return $this->hasMany( CandidateMatch::class, 'employment_job_id');
    }
}
