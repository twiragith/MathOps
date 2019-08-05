<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class fixed_tests extends Model
{
    
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function saveTest($data)
    {
        $this->user_id = auth()->user()->id;
        $this->test_id = $data['test_id'];
        $this->correct_answers = $data['correct_answers'];
        $this->save();
        return 1;
    }

}
