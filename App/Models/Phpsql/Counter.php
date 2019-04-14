<?php

namespace App\Models\Phpsql;

class Counter
{
    public static function getCounts()
    {
        return file_exists(DATAFILES . '/counts.txt') ?
                    file_get_contents(DATAFILES . '/counts.txt') : 1;
    }

    public static function setCounts($counts)
    {
        file_put_contents(DATAFILES . '/counts.txt', $counts);
    }
}
