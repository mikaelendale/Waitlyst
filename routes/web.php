<?php

use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\WaitlistController;
use App\Http\Controllers\LeadsController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\WaitlistEntriesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Contracts\Role;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/agents', function () {
    return Inertia::render('landing/agent');
})->name('agents');
Route::get('/agent/show', function () {
    return Inertia::render('landing/join_waitlist');
})->name('agent.show');

Route::get('redirect', function(){
    $role = auth()->user()->getRoleNames()->first();
    if ($role == 'admin') {
        return redirect()->route('admin.dashboard');
    } elseif ($role == 'user') {
        return redirect()->route('agent.dashboard');
    } else {
        return 500;
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::get('/home', [DashboardController::class, 'index'])->name('agent.dashboard');
});

Route::middleware(['auth',  'verified'])->group(function () {
    Route::resource('locations', LocationController::class);
    Route::resource('waitlist', WaitlistEntriesController::class);
});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/waitlist-signups', [WaitlistController::class, 'index'])->name('admin.waitlist-signups');
    Route::get('/Settings-page', [SettingsController::class, 'index'])->name('admin.settings');
});

Route::post('/leads', [LeadsController::class, 'store']);
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
