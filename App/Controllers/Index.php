<?php

namespace App\Controllers;

use App\Controller;

class Index extends Controller
{
    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/index.php');
    }
}
