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
    
    public function employmentjob()
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
