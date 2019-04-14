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

    <title>Случайный цвет</title>
</head>
<body>
    <h1>Случайный цвет</h1>

    <p>
        <a class="button" href="/">Вернуться к списку заданий</a>
    </p>

    <section class="main-content">

        <form class="form-color" action="" method="post">
            <p>
                <label for="iwidth">Ширина:</label>
                <input id="iwidth" class="set-width" name="height" type="text" placeholder="100">
            </p>
            <p>
                <label for="iheight">Высота:</label>
                <input id="iheight" class="set-height" name="height" type="text" placeholder="100">
            </p>
            <button class="form-color__set" type="button">Случайный цвет</button>
        </form>

        <div class="color-box">
        </div>

    </section>

    <script src="/templates/js/jquery-3.2.0.min.js"></script>
    <script src="/templates/js/color.js"></script>

</body>

</html>
