// A1_CFPS_SampleSize_Distribution_Sun
var dom = document.getElementById("A1_CFPS_SampleSize_Distribution_Sun");
var myChart_A1_CFPS_SampleSize_Distribution_Sun = echarts.init(dom);
var app = {};

var option;

var data_A1_CFPS_SampleSize_Distribution_Sun = [
    {
        name: '华东(4000户)',
        children: [
            {
                name: '上海',
                value: 1600,
            },
            {
                name: '江苏',
                value: 400,
            },
            {
                name: '浙江',
                value: 400,
            },
            {
                name: '浙江',
                value: 400,
            },
            {
                name: '安徽',
                value: 400,
            },
            {
                name: '山东',
                value: 400,
            },
            {
                name: '福建',
                value: 400,
            }
        ]
    },
    {
        name: '华北(1600户)',
        children: [
            {
                name: '山西',
                value: 400
            },
            {
                name: '北京',
                value: 400
            },
            {
                name: '天津',
                value: 400
            },
            {
                name: '河北',
                value: 400
            }
        ]
    },
    {
        name: '华中(2400户)',
        children: [
            {
                name: '河南',
                value: 1600
            },
            {
                name: '湖北',
                value: 400
            },
            {
                name: '湖南',
                value: 400
            }
        ]
    },
    {
        name: '华南(2000户)',
        children: [
            {
                name: '广东',
                value: 1600
            },
            {
                name: '广西',
                value: 400
            }
        ]
    },
    {
        name: '东北(2400户)',
        children: [
            {
                name: '辽宁',
                value: 1600
            },
            {
                name: '吉林',
                value: 400
            },
            {
                name: '黑龙江',
                value: 400
            }
        ]
    },
    {
        name: '西北(2000户)',
        children: [
            {
                name: '甘肃',
                value: 1600
            },
            {
                name: '陕西',
                value: 400
            }
        ]
    },
    {
        name: '西南(1600户)',
        children: [
            {
                name: '四川',
                value: 400
            },
            {
                name: '云南',
                value: 400
            },
            {
                name: '贵州',
                value: 400
            },
            {
                name: '重庆',
                value: 400
            }
        ]
    },
];
option = {
    title: {
        text: 'CFPS样本规模及其分布'
    },
    series: {
        type: 'sunburst',
        emphasis: {
            focus: 'ancestor'
        },
        data: data_A1_CFPS_SampleSize_Distribution_Sun,
        radius: [0, '95%'],
        label: {
            rotate: 'radial',
            fontSize:10,
        }
    }
};

if (option && typeof option === 'object') {
    myChart_A1_CFPS_SampleSize_Distribution_Sun.setOption(option);
}