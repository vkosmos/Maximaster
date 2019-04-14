<?php

namespace App\Models\Phpsql;

use App\Model;

class Products extends Model
{
    protected const TABLE = 'products';

    public $title;
    public $description;
}
