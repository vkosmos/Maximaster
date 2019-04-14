<?php

namespace App\Controllers\Javascript;

use App\Controller;

class Color extends Controller
{

    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/javascript/color.php');
    }
}
