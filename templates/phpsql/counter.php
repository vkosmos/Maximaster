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

    <title>Счетчик посещений</title>
</head>
<body>
    <h1>Счетчик посещений</h1>

    <p>
        <a class="button" href="/">Вернуться к списку заданий</a>
    </p>

    <section class="main-content">

        <p class="counter">Страница была загружена <?=$this->counts;?> раз. Текущее время: <?=date('H:i', time());?></p>

    </section>

</body>
</html>
