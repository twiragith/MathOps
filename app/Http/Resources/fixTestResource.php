<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class fixTestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user_id'=> $this->user_id,
            'user_name'=>$this->user->name,
            'test_id'=> $this->test_id,
            'correct_answers'=>$this->correct_answers,
            'questions'=>$this->questions,
            'accuracy'=>$this->accuracy,
            'created_at'=>$this->created_at->diffForHumans()
        ];
    }
}
