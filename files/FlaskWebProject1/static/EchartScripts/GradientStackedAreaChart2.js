var gradientStackedAreaChart2;

gradientStackedAreaChart2 = {
    title: {
        text: 'Gradient Stacked Area Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: [],
        bottom: 'bottom'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: dataString
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: []
};

class SeriesItem_gradientStackedAreaChart2 {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.type = 'line';
        this.stack = 'Total';
        this.smooth = true;
        this.lineStyle = {
            width: 0
        };
        this.showSymbol = false;
        this.areaStyle = {
            opacity: 0.8
        }
        this.emphasis = {
            focus: 'series'
        }
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new SeriesItem_gradientStackedAreaChart2(dataTitle[i], dataArray[i]);
    gradientStackedAreaChart2.legend.data.push(dataTitle[i]);
    gradientStackedAreaChart2.series.push(tmp);
}
