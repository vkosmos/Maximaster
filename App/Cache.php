<?php

namespace App;

class Cache
{
    use TSingletone;

    public function set($key, $data, $seconds = 3600*24)
    {
        if ($seconds){
            $content['data'] = $data;
            $content['start_day'] = floor(time() / 86400);
            $content['end_time'] = time() + $seconds;
            if (file_put_contents(CACHE . '/' . md5($key) . '.txt', serialize($content))){
                return true;
            }
        }
        return false;
    }

    public function get($key)
    {
        $file = CACHE . '/' . md5($key) . '.txt';
        if (file_exists($file)){
            $content = unserialize(file_get_contents($file));

            $curDay = floor(time() / 86400);
            if ($curDay == $content['start_day'] && time() <= $content['end_time']){
                return $content['data'];
            }
            unlink($file);
        }
        return false;
    }

    public function delete($key)
    {
        $file = CACHE . '/' . md5($key) . '.txt';
        if (file_exists($file)){
            unlink($file);
        }
    }

}
