<?php

namespace App\Http\Controllers;

use App\fixed_tests;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\fixTestResource;

/* use Symfony\Component\Console\Question\Question; */

class FixedTestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        return fixTestResource::collection(auth()->user()->fixed_tests()->latest()->get());
    }

    public function rank()
    {   
        return fixTestResource::collection(fixed_tests::latest()->get());
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        auth()->user()->fixed_tests()->create($request->all());

        /* $category=new Category;

        $category->name=$request->name;
        $category->save(); */

        //$request->user_id->auth()->user()->id;

        //fixed_tests::create($request->all());

        /* $fixed_test = new fixed_tests();
        $data = $this->validate($request, [
            'user_id'=>'required',
            'test_id'=> 'required'
        ]);
       
        $fixed_test->saveTest($data);
 */
        return response('created',Response::HTTP_CREATED);
        //return response(new QuestionResource($question), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\fixed_tests  $fixed_tests
     * @return \Illuminate\Http\Response
     */
    public function show(fixed_tests $fixed_tests)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\fixed_tests  $fixed_tests
     * @return \Illuminate\Http\Response
     */
    public function edit(fixed_tests $fixed_tests)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\fixed_tests  $fixed_tests
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, fixed_tests $fixed_tests)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\fixed_tests  $fixed_tests
     * @return \Illuminate\Http\Response
     */
    public function destroy(fixed_tests $fixed_tests)
    {
        //
    }
}
