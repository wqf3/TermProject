var stepLine;
stepLine = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [],
        bottom:'bottom',
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
        data: dataString
    },
    yAxis: {
        type: 'value'
    },
    series: [

    ]
};

class series_stepLine {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.step = 'middle';
        this.type = 'line';
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new series_stepLine(dataTitle[i], dataArray[i]);
    stepLine.legend.data.push(dataTitle[i]);
    stepLine.series.push(tmp);
}