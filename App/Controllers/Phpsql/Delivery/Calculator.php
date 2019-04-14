<?php

namespace App\Controllers\Phpsql\Delivery;

use App\Cache;
use App\Controller;

class Calculator extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->cache = Cache::getInstance();
    }

    public function __invoke()
    {
        if ('POST' === $_SERVER['REQUEST_METHOD']){
            header("Content-Type: application/json");
            $data = [
                'status' => 'error',
                'price' => 0,
                'message' => 'Ошибка расчета стоимости доставки, повторите запрос позже'
            ];
            http_response_code(500);

            if (!empty($_POST) && isset($_POST['city']) && isset($_POST['weight'])) {
                $cities = $this->cache->get('cities');
                if (!$cities){
                    $cities = file_get_contents('http://exercise.develop.maximaster.ru/service/city/');
                }
                $cities = json_decode($cities);

                $options = [
                    'http' => [
                        'method' => 'GET',
                        'ignore_errors' => true,
                    ],
                ];
                $context = stream_context_create($options);
                $request = 'http://exercise.develop.maximaster.ru/service/delivery/';
                $request .= '?city=' . $cities[$_POST['city']];
                $request .= '&weight=' . (int)$_POST['weight'];
                $answer = file_get_contents($request, false, $context);
                $answer = json_decode($answer);

                $data = ['status' => $answer->status, 'price' => $answer->price, 'message' => $answer->message];
                http_response_code(200);
            }

            echo json_encode($data);
        }
    }
}
