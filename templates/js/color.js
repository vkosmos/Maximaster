$(document).ready(function(){

    let colorBox = $('.color-box');

    $('.set-width').on('keyup', function(){
        let tempW = parseInt($(this).val());
        if (isNaN(tempW)) {
            tempW = 100;
        }
        colorBox.css('width', tempW);
    });

    $('.set-height').on('keyup', function(){
        let tempH = parseInt($(this).val());
        if (isNaN(tempH)) {
            tempH = 100;
        }
        colorBox.css('height', tempH);
    });

    $('.form-color__set').on('click', function(){
        let rndColor = '#' + Math.floor(Math.random() * 256).toString(16) +
                            Math.floor(Math.random() * 256).toString(16) +
                            Math.floor(Math.random() * 256).toString(16);
        colorBox.css('background-color', rndColor);
    });

 });

