<?php

namespace App\Models\Phpsql;

use App\Model;

class Guestbook extends Model
{
    protected const TABLE = 'guestbook';

    public $time;
    public $author;
    public $content;

}
