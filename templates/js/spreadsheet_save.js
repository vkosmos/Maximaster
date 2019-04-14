$(document).ready(function(){

    let ss = $('.spreadsheet');
    let ssData = [['','',''],['','',''],['','','']];
    let buttonColPlus = $('.button__cols--plus');
    let buttonColMinus = $('.button__cols--minus');
    let buttonRowPlus = $('.button__rows--plus');
    let buttonRowMinus = $('.button__rows--minus');
    let rowsCounter = 3;
    let colsCounter = 3;

    init();

    buttonColPlus.on('click', function(){
        for (let i = 0; i < rowsCounter; i++){
            ssData[i].push('');
        }
        colsCounter++;
        createCol();
    });

    buttonColMinus.on('click', function(){
        let act = true;
        if (!isEmpty('column')) {
            act = confirm('Вы действиетльно хотите удалить столбец с данными?');
        }
        if (colsCounter > 1 && act) {
            for (let i = 0; i < rowsCounter; i++){
                ssData[i].pop();
            }
            colsCounter--;
            deleteCol();
        }
    });

    buttonRowPlus.on('click', function(){
        let temp = [];
        for (let i=0; i < colsCounter; i++){
            temp.push('');
        }
        ssData.push(temp);
        rowsCounter++;
        createRow(colsCounter, rowsCounter - 1);
    });

    buttonRowMinus.on('click', function(){
        let act = true;
        if (!isEmpty('row')){
            act = confirm('Вы действительно хотите удалить строку с данными?');
        }
        if (rowsCounter > 1 && act) {
            ssData.pop();
            rowsCounter--;
            deleteRow();
        }
    });

    function init(){
        let temp = getSpreadsheetDataLS();
        if (temp) {
            ssData = temp;
            rowsCounter = ssData.length;
            colsCounter = ssData[0].length;
            for (let i = 0; i < rowsCounter; i++){
                createRow(colsCounter, i);
            }
            showInputsWithData();
        }
    }

    function createCol(){
        let rows = $('.spreadsheet__row');
        let i = 0;
        rows.each(function(){
            let cellNew = $('<div class="spreadsheet__cell"><input class="spreadsheet__input" type="text" value="" data-r="' + i + '" data-c="' + (colsCounter - 1) + '"></div>');
            $(this).append(cellNew);
            i++;
        });
        setSpreadsheetDataLS();
    }

    function deleteCol(){
        let rows = $('.spreadsheet__row');
        rows.each(function(){
            $(this).find('.spreadsheet__cell').last().remove();
        });
        setSpreadsheetDataLS();
    }

    function createRow(count, rindex){
        let rowNew = $('<div class="spreadsheet__row"></div>');
        let inner = '';
        for (let i = 0; i < count; i++){
            inner += '<div class="spreadsheet__cell"><input class="spreadsheet__input" type="text" value="' + ssData[rindex][i] + '" data-r="' + rindex +'" data-c="' + i + '"></div>';
        }
        rowNew.append(inner);
        ss.append(rowNew);
        setSpreadsheetDataLS();
    }

    function deleteRow(){
        let rowDeleting = $('.spreadsheet__row').last();
        if (rowDeleting) {
            rowDeleting.remove();
        }
        setSpreadsheetDataLS();
    }

    /*
        Ввод данных
     */

    $('.spreadsheet').on('change', '.spreadsheet__input', function(){

        let rr = $(this).attr('data-r');
        let cc = $(this).attr('data-c');
        ssData[rr][cc] = $(this).val();

        setSpreadsheetDataLS();
    });

    ss.on('click touchstart', function(ev){

        if (ev.target.classList.contains('spreadsheet__cell')){
            let targ = ev.target;
            if (targ) {
                let inp = $(targ).find('input');
                inp.show();
                inp.focus();
                hideInputsWithoutData(inp);
            }
        }
        if (ev.target.classList.contains('spreadsheet__input')) {
            let targ = ev.target;
            if (targ) {
                let inp = targ;
                inp.focus();
                hideInputsWithoutData(inp);
            }
        }
    });

    function showInputsWithData() {
        let inputs = $('.spreadsheet__input').filter(function(){
            if (this.value == '') {
                return false;
            } else {
                return true;
            }
        });
        inputs.show();
    }

    function hideInputsWithoutData(el){
        let inputs = $('.spreadsheet__input').not(el).filter(function(){
            if (this.value == ''){
                return true;
            } else {
                return false;
            }
        });
        inputs.hide();
    }

    ss.on('keydown', function(ev){
        if (27 == ev.keyCode && ev.target.classList.contains('spreadsheet__input')) {
            let targ = ev.target;
            $(targ).val('');
            $(targ).hide();
        }
    });

    function getSpreadsheetDataLS(){
        let temp = localStorage.getItem('ss');
        if (temp) {
            return JSON.parse(temp);
        }
        return false;
    }

    function setSpreadsheetDataLS(){
        let temp = JSON.stringify(ssData);
        localStorage.setItem('ss', temp);
    }

    function isEmpty(direction){
        if ('row' == direction) {
            for (let i = 0; i < colsCounter; i++) {
                if ('' != ssData[rowsCounter - 1][i]){
                    return false;
                }
            }
        }
        if ('column' == direction) {
            for (let i = 0; i < rowsCounter; i++) {
                if ('' != ssData[i][colsCounter - 1]){
                    return false;
                }
            }
        }
        return true;
    }

});

