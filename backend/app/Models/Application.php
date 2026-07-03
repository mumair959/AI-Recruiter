<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'employment_job_id',
        'candidate_id',
        'status',
        'applied_at'
    ];

    protected $appends = [
        'candidate_match',
    ];

    public function getCandidateMatchAttribute()
    {
        return CandidateMatch::query()
            ->where('candidate_id', $this->candidate_id)
            ->where('employment_job_id', $this->employment_job_id)
            ->first();
    }

    public function employmentJob()
    {
        return $this->belongsTo(EmploymentJob::class, 'employment_job_id');
    }

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function activities()
    {
        return $this->hasMany(ApplicationActivity::class);
    }

    public function notes()
    {
        return $this->hasMany(ApplicationNote::class);
    }

}
