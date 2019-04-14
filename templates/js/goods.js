window.onload = function(){

    new GoodsTable({
        filter: '.filter',
        filter_min: '.filter__price--min',
        filter_max: '.filter__price--max',
        filter_button: '.filter__button',
        table: '.goods-table',
        no_goods: '.filter__none',
        to_hide: '.goods__hide',
        request_adress: 'http://exercise.develop.maximaster.ru/service/products/',
    });

};

function GoodsTable(initParams) {

    let gObj = this;
    this.goodsData = [];
    this.adr = initParams.request_adress;
    this.requestDay = 0;

    this.filterForm = document.querySelector(initParams.filter);
    this.filterMin = document.querySelector(initParams.filter_min);
    this.filterMax = document.querySelector(initParams.filter_max);
    this.filterButton = document.querySelector(initParams.filter_button);
    this.gTable = document.querySelector(initParams.table);
    this.noGoods = document.querySelector(initParams.no_goods);
    this.toHide = initParams.to_hide;

    getGoods();

    this.filterButton.addEventListener('click', function(){

        let min = gObj.filterMin.value || 0;
        let max = gObj.filterMax.value || 0;

        //Проверяем, не сменился ли день
        let curDay = Math.floor( Math.round((new Date()).getTime() / 1000) / 86400);
        if (curDay != gObj.requestDay){//Сменился день, перезапрашиваем данные
            gObj.requestDat = curDay;
            getGoods();
        }

        //Массив профильтрованных товаров
        let filteredData = filterGoods(min, max);

        //Очищаем таблицу
        let oldRows = document.querySelectorAll('.goods-table__item');
        for (let i = 0; i < oldRows.length; i++){
            gObj.gTable.removeChild(oldRows[i]);
        }

        //Заново отрисовываем таблицу
        if (0 != filteredData.length) {
            showTable(filteredData);

            gObj.gTable.classList.remove(gObj.toHide);
            gObj.noGoods.classList.add(gObj.toHide);

        } else {//В случае отсутсвия товаров
            gObj.gTable.classList.add(gObj.toHide);
            gObj.noGoods.classList.remove(gObj.toHide);
        }

    });

    this.filterMin.addEventListener('input', function(){
        this.value = this.value.replace(/\D/g, '');
    });

    this.filterMax.addEventListener('input', function(){
        this.value = this.value.replace(/\D/g, '');
    });

    function getGoods(){
        fetch(gObj.adr)
            .then(status)
            .then(json)
            .then(function(ar){
                gObj.goodsData = ar;
                showTable(ar);
                gObj.requestDay = Math.floor( Math.round((new Date()).getTime() / 1000) / 86400);
            })
            .catch(function(e){
                console.log('Fetch error: ', e);
            });
    }

    function showTable(data) {
        let ar = data;
        let trElem;
        let tdElem;
        for (let i = 0; i < ar.length; i++){
            trElem = document.createElement('tr');
            trElem.classList.add('goods-table__item');
            tdElem = createTableRowItem(trElem, i+1);
            tdElem = createTableRowItem(trElem, ar[i].name);
            tdElem = createTableRowItem(trElem, ar[i].quantity);
            tdElem = createTableRowItem(trElem, ar[i].price);
            tdElem = createTableRowItem(trElem, ar[i].quantity * ar[i].price);
            gObj.gTable.appendChild(trElem);
        }
    }

    function createTableRowItem(parentElem, data){
        let tdElem = document.createElement('td');
        let textElem = document.createTextNode(data);
        tdElem.appendChild(textElem);
        parentElem.appendChild(tdElem);
    }

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        return response.json()
    }

    function filterGoods(min, max){
        if (0 == min && 0 == max) {
            return gObj.goodsData;
        }
        let filtered = [];
        for (let i = 0; i < gObj.goodsData.length; i++){
            if (gObj.goodsData[i].price >= min && gObj.goodsData[i].price <= max){
                filtered.push(gObj.goodsData[i]);
            }
        }
        return filtered;
    }

};
