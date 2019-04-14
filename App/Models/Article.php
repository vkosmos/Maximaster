<?php

namespace App\Models;

use App\Db;
use App\Model;

/**
 * Class Article
 * @package App\Models
 */
class Article extends Model
{
    protected const TABLE = 'news';

    public $title;
    public $content;
    public $author_id;

    /**
     * Возвращает последние n записей, где n передается в виде параметра
     * @param int $number
     * @return array
     */
    public static function findN(int $number)
    {
        $db = new Db();

        $sql = 'SELECT * FROM ' . static::TABLE . ' ORDER BY ID DESC LIMIT :n';
        $params = [':n' => $number];

        $data = $db->query(
            $sql,
            $params,
            static::class
        );

        return $data;
    }

    /**
     * Магия, геттер
     * @param $name string
     * @return null|object
     */
    public function __get($name)
    {
        if ($name == 'author'){
            if (!empty($this->author_id)) {
                $author = Author::findById($this->author_id);
                return (false === $author) ? null : $author;
            }
        }
        return null;
    }

    /**
     * Магия, проверка существования поля
     * @param $name string
     * @return bool
     */
    public function __isset($name)
    {
        if ('author' == $name) {
            if (!empty($this->author_id)) {
                return true;
            }
        }
        return false;
    }
}
