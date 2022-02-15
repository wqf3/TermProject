var stackedAreaChart2;

stackedAreaChart2 = {
  title: {
    text: 'Stacked Area Chart'
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
      bottom:'bottom'
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
      data:dataString
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [

  ]
};

class SeriesItem_stackedAreaChart2 {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.type = 'line';
        this.stack = 'Total';
        this.areaStyle = {

        }
        this.emphasis = {
            focus: 'series'
        }
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new SeriesItem_stackedAreaChart2(dataTitle[i], dataArray[i]);
    stackedAreaChart2.legend.data.push(dataTitle[i]);
    stackedAreaChart2.series.push(tmp);
}