var basicBar;

basicBar = {
    xAxis: {
        type: 'category',
        data: dataString
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: yearData,
            type: 'bar'
        }
    ]
};