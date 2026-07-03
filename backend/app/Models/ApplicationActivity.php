<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplicationActivity extends Model
{
    protected $fillable = [
        'application_id',
        'event'
    ];

    public function application()
    {
        return $this->belongsTo(Application::class);
    }
}
