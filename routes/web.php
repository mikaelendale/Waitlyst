<?php

use App\Http\Controllers\LeadsController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\WaitlistEntriesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('home', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth',  'verified'])->group(function () {
    Route::resource('locations', LocationController::class);
    Route::resource('waitlist', WaitlistEntriesController::class);
});

Route::post('/leads', [LeadsController::class, 'store']);
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
