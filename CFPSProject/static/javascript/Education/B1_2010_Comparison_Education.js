// B1_2010_Comparison_Education
var dom = document.getElementById("B1_2010_Comparison_Education");
var myChart_B1_2010_Comparison_Education = echarts.init(dom);
var app = {};

var option;

const posList_B1_2010_Comparison_Education = [
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
        options: posList_B1_2010_Comparison_Education.reduce(function (map, pos) {
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
        const labelOption_B1_2010_Comparison_Education = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
        };
        myChart_B1_2010_Comparison_Education.setOption({
            series: [
                {
                    label: labelOption_B1_2010_Comparison_Education
                },
                {
                    label: labelOption_B1_2010_Comparison_Education
                },
                {
                    label: labelOption_B1_2010_Comparison_Education
                },
                {
                    label: labelOption_B1_2010_Comparison_Education
                }
            ]
        });
    }
};
const labelOption_B1_2010_Comparison_Education = {
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
        text: '2010????????????????????????????????????????????????',
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
            data: ['2010 ??????', '2010 ??????']
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
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [38.86, 18.76]
        },
        {
            name: '??????',
            type: 'bar',
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [25.04, 15.83]
        },
        {
            name: '??????',
            type: 'bar',
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [26.43, 32.44]
        },
        {
            name: '??????/??????/??????/??????',
            type: 'bar',
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [8.03, 19.82]
        },
        {
            name: '??????',
            type: 'bar',
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [1.17, 7.76]
        },
        {
            name: '???????????????',
            type: 'bar',
            label: labelOption_B1_2010_Comparison_Education,
            emphasis: {
                focus: 'series'
            },
            data: [0.47, 5.39]
        }
    ]
};


if (option && typeof option === 'object') {
    myChart_B1_2010_Comparison_Education.setOption(option);
}