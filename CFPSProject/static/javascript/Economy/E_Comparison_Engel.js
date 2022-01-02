// E_Comparison_Engel
var dom = document.getElementById("E_Comparison_Engel");
var myChart_E_Comparison_Engel = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: '2010-2018年城乡恩格尔系数的比较'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['城镇', '乡村', '全国平均']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2010年', '2012年', '2014年', '2016年', '2018年']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}% '
        },
        max: 45,
        min: 25
    },
    series: [
        {
            name: '城镇',
            type: 'line',
            data: [35.7, 36.2, 30.0, 29.3, 27.7]
        },
        {
            name: '乡村',
            type: 'line',
            data: [41.1, 39.3, 33.6, 32.2, 30.1]
        },
        {
            name: '全国平均',
            type: 'line',
            data: [39.7, 37.1, 31, 30.1, 28.4]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_E_Comparison_Engel.setOption(option);
}
