<?php

namespace App\Http\Controllers;

use App\Models\waitlist_entries;
use App\Http\Requests\Storewaitlist_entriesRequest;
use App\Http\Requests\Updatewaitlist_entriesRequest;
use App\Models\Location;
use App\Models\WaitlistEntry;

class WaitlistEntriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('user/waitlist-entry', [
            'waitlist_entries' => WaitlistEntry::with('location')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('user/waitlist-entry-create', [
            'locations' => Location::all(),
        ]);
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
    public function show(WaitlistEntry $waitlist_entry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WaitlistEntry $waitlist_entry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatewaitlist_entriesRequest $request, WaitlistEntry $waitlist_entry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WaitlistEntry $waitlist_entry)
    {
        //
    }
}
