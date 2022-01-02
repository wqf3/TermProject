// B_Comparison_PerCapitaDisposableIncome
var dom = document.getElementById("B_Comparison_PerCapitaDisposableIncome");
var myChart_B_Comparison_PerCapitaDisposableIncome = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2010-2018年城乡人均可支配收入的对比'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    /*
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },*/
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['城镇', '乡村', '收入差距(比例)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'25%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2010年', '2012年', '2014年', '2016年', '2018年'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '收入',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        {
            type: 'value',
            name: '收入差距',
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '城镇',
            type: 'bar',
            data: [
                19109, 24565, 28844, 33616, 39251
            ]
        },
        {
            name: '乡村',
            type: 'bar',
            data: [
                5919, 7019, 10489, 12363, 14617
            ]
        },
        {
            name: '收入差距(比例)',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [0.689, 0.714, 0.637, 0.632, 0.628],
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_B_Comparison_PerCapitaDisposableIncome.setOption(option);
}
