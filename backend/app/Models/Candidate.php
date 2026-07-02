<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'resume_path',
        'summary'
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function employmentJobs()
    {
        return $this->belongsToMany(EmploymentJob::class, 'applications');
    }

    public function profile()
    {
        return $this->hasOne(CandidateProfile::class);
    }

    public function matches(){
        return $this->hasMany(CandidateMatch::class);
    }
}
