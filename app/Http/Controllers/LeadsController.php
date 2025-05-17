<?php

namespace App\Http\Controllers;

use App\Models\leads;
use App\Http\Requests\StoreleadsRequest;
use App\Http\Requests\UpdateleadsRequest;

class LeadsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreleadsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(leads $leads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(leads $leads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateleadsRequest $request, leads $leads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(leads $leads)
    {
        //
    }
}
