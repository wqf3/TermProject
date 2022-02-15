var mixedLineAndBar;

mixedLineAndBar = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
      data: [],
      bottom:'bottom'
  },
  xAxis: [
    {
      type: 'category',
      data: dataString,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Bar',

      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Line',
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
    series: [

  ]
};

class SeriesItem_mixedLine {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.yAxisIndex = 1;
        this.tooltip = {
            valueFormatter: function (value) {
                return value;
            }
        }
        this.type = 'line';
    }
}

class SeriesItem_mixedBar {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.tooltip = {
            valueFormatter: function (value) {
                return value;
            }
        }
        this.type = 'bar';
    }
}

for (var i = 0; i < dataLen; i++) {
    let tmp;
    if (i % 2) {
        tmp = new SeriesItem_mixedLine(dataTitle[i], dataArray[i]);
    }
    else {
        tmp = new SeriesItem_mixedBar(dataTitle[i], dataArray[i]);
    }
    mixedLineAndBar.legend.data.push(dataTitle[i]);
    mixedLineAndBar.series.push(tmp);
}