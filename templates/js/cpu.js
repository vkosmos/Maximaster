window.onload = function(){

    let chartData;
    let chartLength;
    let chartMaxLength = 100;
    let cpuUrl = 'http://exercise.develop.maximaster.ru/service/cpu/';
    let cpuOk = 0;
    let cpuError = 0;
    let allText;
    let erText;

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: [],
            datasets: [{
                label: 'Нагрузка на процессор,%',
                backgroundColor: 'rgba(100,100,100,0.3)',
                borderColor: '#77f',
                data: []
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    },
                }]
            },
            animation: false,
        }
    });

    setInterval(function(){
        getCPU(cpuUrl);
    }, 5000);

    function getCPU(adr){
        chartData = chart.data.datasets[0].data;
        chartLength = chartData.length;

        fetch(adr)
            .then(status)
            .then(json)
            .then(function(ar){
                addData(chart, '', ar);
                cpuOk++;
                if (chartLength >= chartMaxLength){
                    removeData(chart);
                }
                displayCpuTicks();
            })
            .catch(function(e){
                if (chartLength > 0){
                    addData(chart, '', chartData[chartLength - 1]);
                    if (chartLength >= chartMaxLength){
                        removeData(chart);
                    }
                }
                cpuError++;
                displayCpuTicks();
                console.log('Fetch error: ', e);
            });
    }

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    function json(response) {
        return response.json();
    }

    function displayCpuTicks(){
        allText = cpuOk + cpuError;
        erText = ((cpuError / (cpuOk + cpuError)) *100 ).toFixed(2);
        if (isNaN(erText)) {
            erText = 0.00;
        }
        document.querySelector('.cpu-info__all').innerHTML = allText;
        document.querySelector('.cpu-info__error').innerHTML = erText;
    }

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
        chart.update();
    }

};
