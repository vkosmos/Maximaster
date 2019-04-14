<?php

namespace App\Controllers\Javascript;

use App\Controller;

class Spreadsheet extends Controller
{

    public function __invoke()
    {
        $this->view->display(TEMPLATES . '/javascript/spreadsheet.php');
    }
}
