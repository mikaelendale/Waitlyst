<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    /** @use HasFactory<\Database\Factories\LeadsFactory> */
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $table = 'leads';
    protected $fillable = [
        'email',
    ];
    protected $casts = [
        'email' => 'string',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
