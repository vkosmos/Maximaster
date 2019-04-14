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

    <title>Таблица товаров</title>
</head>
<body>
    <h1>Таблица товаров</h1>

    <p>
        <a class="button" href="/">Вернуться к списку заданий</a>
    </p>

    <section class="main-content">

        <form class="filter" action="">
            <label>Цена от:
                <input class="filter__price--min" type="text" placeholder="0">
            </label>
            <label> до:
                <input class="filter__price--max" type="text" placeholder="10000">
            </label>
            <button class="filter__button" type="button">Обновить</button>
        </form>

        <table class="goods-table">
            <tr class="goods-table__item--header">
                <th>ID</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена за единицу</th>
                <th>Сумма</th>
            </tr>
        </table>
        <p class="filter__none goods__hide">Нет данных, попадающих под условие фильтра</p>

    </section>

    <script src="/templates/js/goods.js"></script>

</body>

</html>
