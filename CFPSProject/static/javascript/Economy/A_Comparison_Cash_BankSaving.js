// A_Comparison_Cash_BankSaving
var dom = document.getElementById("A_Comparison_Cash_BankSaving");
var myChart_A_Comparison_Cash_BankSaving = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2010-2018年城乡家庭现金及存款的对比',
        subtext: '单位：元/户'
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
    /*toolbox: {
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
        top: '10%',
        data: ['城镇', '乡村', '差距(比例)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'35%',
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
            name: '差距(比例)',
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '城镇',
            type: 'bar',
            data: [13816, 37764, 40275, 59169, 69616]
        },
        {
            name: '乡村',
            type: 'bar',
            data: [6608, 18199, 20424, 31269, 40567]
        },
        {
            name: '差距(比例)',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [0.522, 0.518, 0.493, 0.471, 0.418],
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_A_Comparison_Cash_BankSaving.setOption(option);
}