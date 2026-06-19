<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplicationNote extends Model
{
    public function application()
    {
        return $this->belongsTo(Application::class);
    }
}
