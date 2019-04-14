<?php

namespace App\Controllers\Javascript;

use App\Controller;

class Cpu extends Controller
{

    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/javascript/cpu.php');
    }
}
