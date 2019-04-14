<?php

namespace App\Controllers\Phpsql\Delivery;

use App\Cache;
use App\Controller;

class Index extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->cache = Cache::getInstance();
    }

    public function __invoke()
    {
        $json = $this->cache->get('cities');

        if (!$json){
            $json = file_get_contents('http://exercise.develop.maximaster.ru/service/city/');
            $this->cache->set('cities', $json, 3600*24*10);
        }

        $json = json_decode($json);
        $this->view->cities = $json;
        $this->view->display(TEMPLATES . '/phpsql/delivery.php');
    }
}
