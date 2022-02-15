var stackedLineChart2;

stackedLineChart2 = {
    title: {
        text: 'Stacked Line',
        
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [],
        bottom:'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataString
    },
    yAxis: {
        type: 'value'
    },
    series: [

    ]
};

class SeriesItem_stackedLineChart2 {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.type = 'line';
        this.stack = 'Total';

    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new SeriesItem_stackedLineChart2(dataTitle[i], dataArray[i]);
    stackedLineChart2.legend.data.push(dataTitle[i]);
    stackedLineChart2.series.push(tmp);
}