<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'article',
        'name',
        'status',
        'data'
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function scopeActive($query)
    {
        $query->where('status', '1');
    }
}
