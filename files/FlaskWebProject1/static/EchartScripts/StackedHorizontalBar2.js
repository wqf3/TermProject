var stackedHorizontalBar2;

stackedHorizontalBar2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow' 
        }
    },
    legend: {
        bottom:'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: dataString
    },
    series: []
};

class SeriesItem_stackedHorizontalBar2 {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.type = 'bar';
        this.stack = 'Total';
        this.label = {
            show: true
        }
        this.emphasis = {
            focus: 'series'
        }
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new SeriesItem_stackedHorizontalBar2(dataTitle[i], dataArray[i]);
    //stackedHorizontalBar2.legend.data.push(dataTitle[i]);
    stackedHorizontalBar2.series.push(tmp);
}