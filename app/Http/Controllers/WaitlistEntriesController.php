<?php

namespace App\Http\Controllers;

use App\Models\waitlist_entries;
use App\Http\Requests\Storewaitlist_entriesRequest;
use App\Http\Requests\Updatewaitlist_entriesRequest;

class WaitlistEntriesController extends Controller
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
    public function store(Storewaitlist_entriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(waitlist_entries $waitlist_entries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(waitlist_entries $waitlist_entries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatewaitlist_entriesRequest $request, waitlist_entries $waitlist_entries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(waitlist_entries $waitlist_entries)
    {
        //
    }
}
