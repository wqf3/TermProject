// B2_2018_Comparison_Education
var dom = document.getElementById("B2_2018_Comparison_Education");
var myChart_B2_2018_Comparison_Education = echarts.init(dom);
var app = {};

var option;

const posList_B2_2018_Comparison_Education = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList_B2_2018_Comparison_Education.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: { 
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption_B2_2018_Comparison_Education = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption_B2_2018_Comparison_Education
        },
        {
          label: labelOption_B2_2018_Comparison_Education
        },
        {
          label: labelOption_B2_2018_Comparison_Education
        },
        {
          label: labelOption_B2_2018_Comparison_Education
        }
      ]
    });
  }
};
const labelOption_B2_2018_Comparison_Education = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {a}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  title: {
    text: '2018????????????????????????????????????????????????',
    subtext: '?????????%',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    //show: true,
    show: false,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['2018 ??????', '2018 ??????']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '??????/?????????',
      type: 'bar',
      barGap: 0,
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [26.88,12.45]
    },
    {
      name: '??????',
      type: 'bar',
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [24.7,15.79]
    },
    {
      name: '??????',
      type: 'bar',
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [30.79,31.73]
    },
    {
      name: '??????/??????/??????/??????',
      type: 'bar',
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [12.47,21.45]
    },
    {
      name: '??????',
      type: 'bar',
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [3.25,10]
    },
    {
      name: '???????????????',
      type: 'bar',
      label: labelOption_B2_2018_Comparison_Education,
      emphasis: {
        focus: 'series'
      },
      data: [1.73,8.58]
    }
  ]
};

if (option && typeof option === 'object') {
    myChart_B2_2018_Comparison_Education.setOption(option);
}