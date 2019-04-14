<?php
/**
 * @var \App\View $this
 */
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="/templates/css/style.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Гостевая книга</title>
</head>
<body>
    <h1>Гостевая книга</h1>

    <p>
        <a class="button" href="/">Вернуться к списку заданий</a>
    </p>

    <section class="main-content">
        <ul class="guest-book">
            <?php foreach ($this->records as $value): ?>
            <li class="guest-book__item">
                <time><?=date('d.m.Y H:i', $value->time);?></time>
                <p><?= !empty($value->author) ? $value->author : 'Анонимно'; ?>
                </p>
                <p><?=$value->content;?></p>
            </li>
            <?php endforeach; ?>
        </ul>

        <hr>

        <form action="/phpsql/guestbook/add" method="post">
            <p>
                <input name="author" type="text" placeholder="Имя">
            </p>
            <p>
                <textarea name="content" placeholder="Ваше сообщение" cols="40" rows="5"></textarea>
            </p>
            <button type="submit">Отправить</button>
        </form>

    </section>

</body>
</html>
