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

    <title>Оформление заказа</title>
</head>
<body>
<h1>Оформление заказа</h1>

<p>
    <a class="button" href="/">Вернуться к списку заданий</a>
</p>

<section class="main-content">

    <form class="order-form" action="" method="post">
        <p>
            <input class="order__input" name="fio" type="text" placeholder="ФИО">
        </p>
        <p>
            <input class="order__input" name="phone" type="text" placeholder="Телефон">
        </p>
        <p>
            <input class="order__input" name="email" type="text" placeholder="Email">
        </p>
        <p>
            <input class="order__input" name="latitude" type="hidden" value="">
            <input class="order__input" name="longitude" type="hidden" value="">
        <div id="order-map"></div>
        </p>
        <p>
            <textarea class="order__textarea" name="comment" cols="30" rows="10" placeholder="Комментарий к заказу (макс. 500 символов)"></textarea>
            <span>Осталось <span class="order__textarea-note">500</span> символов</span>
        </p>
        <button class="order__button" type="submit">Отправить</button>
    </form>

    <p class="order__success"></p>
    <ul class="order__error"></ul>

</section>

<script src="/templates/js/jquery-3.2.0.min.js"></script>
<script src="/templates/js/order.js"></script>

</body>

</html>
