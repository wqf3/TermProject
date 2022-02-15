var basicPieChart;

basicPieChart = {
    title: {
        text: 'Pie Chart',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        bottom:'bottom'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [

            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

for (var i = 0; i < dataString.length; i++) {
    let tmp = { value: yearData[i], name: dataString[i] };
    basicPieChart.series[0].data.push(tmp);
}