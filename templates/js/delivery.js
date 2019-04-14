$(document).ready(function(){

    $('.delivery__button--submit').on('click', function(e){

        let city = $('.delivery__form select').val();
        let weight = parseInt((/\d+/).exec($('.delivery__form input[name=weight]').val())[0]);
        let data = 'city=' + city + '&weight=' + weight;

        $.ajax({
            type: 'POST',
            url: '/phpsql/delivery/calculator',
            data: data,
            success: function(response){
                $('.delivery__results p').text(response.message);
            },
            error: function(response){
                $('.delivery__results p').text(response.message);
            }
        });

        e.preventDefault();
    });

 });

