<?php

namespace App\Controllers\Javascript;

use App\Controller;

class Order extends Controller
{

    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/javascript/order.php');
    }
}
