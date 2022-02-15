var barWithBackground;

barWithBackground = {
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
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
};
