var stackedBarChartOnPolar;

stackedBarChartOnPolar = {
    angleAxis: {},
    radiusAxis: {
        type: 'category',
        data: dataString,
        z: 10
    },
    polar: {},
    series: [

    ],
    legend: {
        show: true,
        data: [],
        bottom:'bottom'
    }
};

class series_stackedBarChartOnPolar {
    constructor(name, data) {
        this.name = name;
        this.stack = 'a';
        this.type = 'bar';
        this.coordinateSystem = 'polar';
        this.data = data;
        this.emphasis = {
            focus: 'series'
        };
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new series_stackedBarChartOnPolar(dataTitle[i], dataArray[i]);
    stackedBarChartOnPolar.legend.data.push(dataTitle[i]);
    stackedBarChartOnPolar.series.push(tmp);
}

