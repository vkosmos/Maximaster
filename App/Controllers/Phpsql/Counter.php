<?php

namespace App\Controllers\Phpsql;

use App\Controller;
use App\Models\Phpsql\Counter as MCounter;

class Counter extends Controller
{

    public function __invoke()
    {
        $counts = MCounter::getCounts();
        $this->view->counts = $counts;
        $this->view->display(TEMPLATES . '/phpsql/counter.php');
        $counts++;
        MCounter::setCounts($counts);
    }
}
