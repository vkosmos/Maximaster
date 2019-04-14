<?php

namespace App\Controllers\Phpsql\Guestbook;

use App\Controller;
use App\Models\Phpsql\Guestbook;

class Index extends Controller
{
    public function __invoke()
    {
        $this->view->records = Guestbook::findAll();
        $this->view->display(TEMPLATES . '/phpsql/guestbook.php');
    }
}
