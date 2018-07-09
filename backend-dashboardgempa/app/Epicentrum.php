<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Epicentrum extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'time',
        'latitude',
        'longitude',
        'depth',
        'mag',
        'typemag',
        'smaj',
        'smin',
        'az',
        'rms',
        'cphase',
        'region',
    ];
}
