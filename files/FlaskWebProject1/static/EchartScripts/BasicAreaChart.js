var basicAreaChart;

basicAreaChart = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataString
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: yearData,
            type: 'line',
            areaStyle: {}
        }
    ]
};