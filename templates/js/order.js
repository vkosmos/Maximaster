$(document).ready(function(){

    ymaps.ready(init);

    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("order-map", {
            center: [54.1940, 37.6210],
            zoom: 12
        }, {
            balloonMaxWidth: 150,
            searchControlProvider: 'yandex#search'
        });

        // Обработка события, возникающего при щелчке левой кнопкой мыши в любой точке карты.
        // При возникновении такого события откроем балун.
        myMap.events.add('click', function (e) {
            if (!myMap.balloon.isOpen()) {
                var coords = e.get('coords');
                myMap.balloon.open(coords, {
                    contentHeader:'Адрес доставки',
                    contentBody:'<p>Вы выбрали следующие координаты:</p>' +
                    '<p>' + [
                        coords[0].toPrecision(6),
                        coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                    contentFooter:''
                });

                myMap.geoObjects.removeAll();
                myPlacemark = new ymaps.Placemark(coords);
                myMap.geoObjects.add(myPlacemark);

                $('.order__input[name=latitude]').val(coords[0]);
                $('.order__input[name=longitude]').val(coords[1]);

            } else {
                myMap.balloon.close();
            }

        });

        // Скрываем хинт при открытии балуна.
        myMap.events.add('balloonopen', function (e) {
            myMap.hint.close();
        });

    }

    $('.order__textarea').on('input', function(){
        let textLength = $(this).val().length;
        if (textLength > 500){
            textLength = 500;
        }
        $('.order__textarea-note').text(500 - textLength);
    });

    $('.order__button').on('click', function(e){
        let errors = [];
        let fio = $('.order__input[name=fio]').val();
        let phone = $('.order__input[name=phone]').val();
        let email = $('.order__input[name=email]').val();
        let latitude = $('.order__input[name=latitude]').val();
        let longitude = $('.order__input[name=longitude]').val();
        let comment = $('.order__textarea').val();

        if ('' === fio){
            errors.push('Введите ФИО');
        }
        if ('' === phone){
            errors.push('Укажите номер телефона');
        }
        if (-1 === email.indexOf('@')){
            errors.push('Неверный формат email.');
        }
        if ('' === latitude || '' === longitude){
            errors.push('Укажите на карте адрес доставки');
        }
        if (comment.length > 500){
            errors.push('Слишком длинный комментарий. Не более 500 символов.');
        }

        if (errors.length > 0){
            e.preventDefault();

            let errorHtml = '';
            for (let i = 0; i < errors.length; i++){
                errorHtml += '<li>' + errors[i] + '</li>';
            }
            $('.order__success').html('');
            $('.order__error').html(errorHtml);
        } else {
            e.preventDefault();
            //Заказ оформлен!!!
            $('.order__error').html('');
            $('.order__success').html('Заказ оформлен!');
        }

    });

 });
