<?php

namespace App;

class Router
{
    /**
     * Вычисляет имя контроллера, исходя из запрошенного адреса (без GET-параметров)
     * @param $route string
     * @return string
     */
    public static function processRoute($route)
    {
        $route = mb_strtolower($route);
        $routeAr = explode('/', $route);

        $controllerAr = [];
        foreach ($routeAr as $item){
            if ('' != $item){
                $controllerAr[] = $item;
            }
        }

//        debug($_SERVER["REQUEST_URI"]);
//        debug($_SERVER['REQUEST_METHOD']);
//        debug($controllerAr);
//        die;

        //Проверка для главной страницы пользовательской части
        if (0 == count($controllerAr)){
            $controllerAr[] = 'Index';
        }

        $index = $controllerAr[count($controllerAr) - 1];
        if ('guestbook' == $index || 'delivery' == $index || 'restapi' == $index){
            $controllerAr[] = 'Index';
        }

        $controllerName = 'App\\Controllers';
        foreach ($controllerAr as $item){
            $controllerName .= '\\' . ucfirst($item);
        }

        return $controllerName;
    }
}
