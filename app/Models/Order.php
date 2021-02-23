<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';

    protected $fillable = [
        'id_menu', 'id_customer'
    ];

    public function menu(){
        return $this->belongsTo('App\Models\Menu');
    }
    public function customer(){
        return $this->belongsTo('App\Models\Menu\Customer');
    }
}
