<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    /** @use HasFactory<\Database\Factories\LocationFactory> */
    use HasFactory;
    

    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'country',
        'timezone',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'name' => 'string',
        'slug' => 'string',
        'country' => 'string',
        'timezone' => 'string',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function waitlistEntries()
    {
        return $this->hasMany(WaitlistEntry::class);
    }
}
