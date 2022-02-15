var nightingaleChart;

nightingaleChart = {
    title: {
        text: 'Nightingale Chart',
        left: 'left'
    },
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [

            ]
        }
    ]
};

for (var i = 0; i < dataString.length; i++) {
    let tmp = { value: yearData[i], name: dataString[i] };
    nightingaleChart.series[0].data.push(tmp);
}

