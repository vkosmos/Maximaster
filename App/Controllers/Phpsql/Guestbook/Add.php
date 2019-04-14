<?php

namespace App\Controllers\Phpsql\Guestbook;

use App\Controller;
use App\Models\Phpsql\Guestbook;

class Add extends Controller
{
    public function __invoke()
    {
        if ('POST' == $_SERVER['REQUEST_METHOD']) {
            $data = $_POST;
            $record = new Guestbook();
            $record->time = time();
            $record->author = $this->validate('author', $data['author']);
            $record->content = $this->validate('content', $data['content']);
            if ($record->content){
                $record->save();
            }
            header('Location: /Phpsql/Guestbook');
        }
    }

    protected function validate($kind, $value){
        switch ($kind) {
            case 'author':
                return trim($value);
                break;
            case 'content':
                return (!empty($value) ? trim($value) : null);
                break;
        }
    }
}
