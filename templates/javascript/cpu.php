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

    <title>График загруженности процессора</title>
</head>
<body>
<h1>График загруженности процессора</h1>

<p>
    <a class="button" href="/">Вернуться к списку заданий</a>
</p>

<section class="main-content">

    <div class="canvas-wrapper">
        <canvas id="myChart"></canvas>
    </div>
    <div class="cpu-info">
        Число запросов: <span class="cpu-info__all">0</span>
        Процент ошибок: <span class="cpu-info__error">0.00</span>
    </div>

</section>


<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="/templates/js/cpu.js"></script>

</body>

</html>
