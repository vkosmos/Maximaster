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

    <title>Калькулятор доставки</title>
</head>
<body>
    <h1>Калькулятор доставки</h1>

    <p>
        <a class="button" href="/">Вернуться к списку заданий</a>
    </p>

    <section class="main-content">

        <form class="delivery__form" action="" method="post">
            <p>
                <select name="city">
                    <?php foreach($this->cities as $key => $value): ?>
                    <option value="<?=$key;?>" <?=('Москва' == $value) ? 'selected' : '';?>>
                        <?=$value;?>
                    </option>
                    <?php endforeach; ?>
                </select>
            </p>
            <p>
                <input name="weight" type="text" placeholder="Вес, кг">
            </p>
            <button class="delivery__button--submit" type="submit">Рассчитать</button>
        </form>

        <div class="delivery__results">
            <p></p>
        </div>

    </section>

    <script src="/templates/js/jquery-3.2.0.min.js"></script>
    <script src="/templates/js/delivery.js"></script>

</body>

</html>
