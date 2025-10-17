<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'accounts';

    /**
     * The attributes that are mass assignable.
     *
     * We allow setting all columns defined in the migration.
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'code',
        'type',
        'sub_type',
    ];

    /**
     * The attributes that should be cast to native types.
     * Since 'type' is an ENUM, we can cast it as a string for clarity.
     *
     * @var array
     */
    protected $casts = [
        'type' => 'string',
    ];
}
