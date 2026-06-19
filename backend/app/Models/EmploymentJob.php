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
        'status'
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function candidates()
    {
        return $this->belongsToMany(Candidate::class,'applications');
    }
}
