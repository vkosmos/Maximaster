<?php

namespace App\Controllers\Javascript;

use App\Controller;

class Goods extends Controller
{

    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/javascript/goods.php');
    }
}
