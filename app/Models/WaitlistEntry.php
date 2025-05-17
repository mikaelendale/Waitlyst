<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaitlistEntry  extends Model
{
    /** @use HasFactory<\Database\Factories\WaitlistEntriesFactory> */
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $table = 'waitlist_entries';
    protected $fillable = [
        'location_id',
        'name',
        'contact',
        'status',
        'joined_at',
        'notified_at',
        'served_at',
    ];
    protected $casts = [
        'location_id' => 'integer',
        'name' => 'string',
        'contact' => 'string',
        'status' => 'string',
        'joined_at' => 'datetime',
        'notified_at' => 'datetime',
        'served_at' => 'datetime',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
