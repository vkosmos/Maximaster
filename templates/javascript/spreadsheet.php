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

    <script src="https://api-maps.yandex.ru/2.1/?apikey=ef35a101-5c36-48dd-a0f2-61b64c2abc68&lang=ru_RU" type="text/javascript">
    </script>

    <title>Электронная таблица</title>
</head>
<body>
<h1>Электронная таблица</h1>

<p>
    <a class="button" href="/">Вернуться к списку заданий</a>
</p>

<section class="main-content">

    <div class="spreadsheet-container">

        <div class="spreadsheet-wrapper">
            <div class="spreadsheet">
            </div>

            <div class="spreadsheet__buttons--rows">
                <button class="button__cols--plus" type="button">+</button>
                <button class="button__cols--minus" type="button">-</button>
            </div>

        </div>

        <div class="spreadsheet__buttons--cols">
            <button class="button__rows--plus" type="button">+</button>
            <button class="button__rows--minus" type="button">-</button>
        </div>

    </div>

</section>

<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="/templates/js/jquery-3.2.0.min.js"></script>
<script src="/templates/js/spreadsheet.js"></script>

</body>

</html>
