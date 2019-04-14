$(document).ready(function(){

    new MySpreadSheet({
        ss: '.spreadsheet',
        buttonColPlus: '.button__cols--plus',
        buttonColMinus: '.button__cols--minus',
        buttonRowPlus: '.button__rows--plus',
        buttonRowMinus: '.button__rows--minus',
    });

});

function MySpreadSheet(initParams){

    let myss = this;
    this.ss = $(initParams.ss);
    this.ssData = [];
    this.rowsCounter = 0;
    this.colsCounter = 0;
    this.buttonColPlus = $(initParams.buttonColPlus);
    this.buttonColMinus = $(initParams.buttonColMinus);
    this.buttonRowPlus = $(initParams.buttonRowPlus);
    this.buttonRowMinus = $(initParams.buttonRowMinus);
    let ssRow = '.spreadsheet__row';
    let ssCell = '.spreadsheet__cell';
    let ssInput = '.spreadsheet__input';

    init();

    myss.buttonColPlus.on('click', function(){
        for (let i = 0; i < myss.rowsCounter; i++){
            myss.ssData[i].push('');
        }
        myss.colsCounter++;
        createCol();
    });

    myss.buttonColMinus.on('click', function(){
        let act = true;
        if (!isEmpty('column')) {
            act = confirm('Вы действиетльно хотите удалить столбец с данными?');
        }
        if (myss.colsCounter > 1 && act) {
            for (let i = 0; i < myss.rowsCounter; i++){
                myss.ssData[i].pop();
            }
            myss.colsCounter--;
            deleteCol();
        }
    });

    myss.buttonRowPlus.on('click', function(){
        let temp = [];
        for (let i=0; i < myss.colsCounter; i++){
            temp.push('');
        }
        myss.ssData.push(temp);
        myss.rowsCounter++;
        createRow(myss.colsCounter, myss.rowsCounter - 1);
    });

    myss.buttonRowMinus.on('click', function(){
        let act = true;
        if (!isEmpty('row')){
            act = confirm('Вы действительно хотите удалить строку с данными?');
        }
        if (myss.rowsCounter > 1 && act) {
            myss.ssData.pop();
            myss.rowsCounter--;
            deleteRow();
        }
    });

    function init(){
        let temp = getSpreadsheetDataLS();
        if (temp) {
            myss.ssData = temp;
            myss.rowsCounter = myss.ssData.length;
            myss.colsCounter = myss.ssData[0].length;
        } else {
            myss.ssData = [['','',''],['','',''],['','','']];
            myss.rowsCounter = 3;
            myss.colsCounter = 3;
        }

        for (let i = 0; i < myss.rowsCounter; i++){
            createRow(myss.colsCounter, i);
        }
        showInputsWithData();
    }

    function createCol(){
        let rows = $(ssRow);
        let i = 0;
        rows.each(function(){
            let cellNew = $('<div class="spreadsheet__cell"><input class="spreadsheet__input" type="text" value="" data-r="' + i + '" data-c="' + (myss.colsCounter - 1) + '"></div>');
            $(this).append(cellNew);
            i++;
        });
        setSpreadsheetDataLS();
    }

    function deleteCol(){
        let rows = $(ssRow);
        rows.each(function(){
            $(this).find(ssCell).last().remove();
        });
        setSpreadsheetDataLS();
    }

    function createRow(count, rindex){
        let rowNew = $('<div class="spreadsheet__row"></div>');
        let inner = '';
        for (let i = 0; i < count; i++){
            inner += '<div class="spreadsheet__cell"><input class="spreadsheet__input" type="text" value="' + myss.ssData[rindex][i] + '" data-r="' + rindex +'" data-c="' + i + '"></div>';
        }
        rowNew.append(inner);
        myss.ss.append(rowNew);
        setSpreadsheetDataLS();
    }

    function deleteRow(){
        let rowDeleting = $(ssRow).last();
        if (rowDeleting) {
            rowDeleting.remove();
        }
        setSpreadsheetDataLS();
    }


    this.ss.on('change', ssInput, function(){

        let rr = $(this).attr('data-r');
        let cc = $(this).attr('data-c');
        myss.ssData[rr][cc] = $(this).val();

        setSpreadsheetDataLS();
    });

    this.ss.on('click touchstart', function(ev){

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
        let inputs = $(ssInput).filter(function(){
            if (this.value == '') {
                return false;
            } else {
                return true;
            }
        });
        inputs.show();
    }

    function hideInputsWithoutData(el){
        let inputs = $(ssInput).not(el).filter(function(){
            if (this.value == ''){
                return true;
            } else {
                return false;
            }
        });
        inputs.hide();
    }

    this.ss.on('keydown', function(ev){
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
        let temp = JSON.stringify(myss.ssData);
        localStorage.setItem('ss', temp);
    }

    function isEmpty(direction){
        if ('row' == direction) {
            for (let i = 0; i < myss.colsCounter; i++) {
                if ('' != myss.ssData[myss.rowsCounter - 1][i]){
                    return false;
                }
            }
        }
        if ('column' == direction) {
            for (let i = 0; i < myss.rowsCounter; i++) {
                if ('' != myss.ssData[i][myss.colsCounter - 1]){
                    return false;
                }
            }
        }
        return true;
    }

};

