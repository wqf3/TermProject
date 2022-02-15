// C_MedicalServiceBedAmount

var dom = document.getElementById("C_MedicalServiceBedAmount");
var myChart_C_MedicalServiceBedAmount = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: '2010-2018年城乡医疗卫生机构床位数'
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
    // toolbox: {
    //     feature: {
    //         dataView: { show: true, readOnly: false },
    //         magicType: { show: true, type: ['line', 'bar'] },
    //         restore: { show: true },
    //         saveAsImage: { show: true }
    //     }
    // },
    legend: {
        top: 'bottom',
        data: ['城镇医疗机构卫生床位数', '乡村医疗机构卫生床位数', '城镇每千人口床位数', '乡村每千人口床位数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '20%',
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
            name: '医疗机构卫生床位数',
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '每千人口床位数',
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '城镇医疗机构卫生床位数',
            type: 'bar',
            data: [
                2302297, 2733403, 3169880, 3654956, 4141427
            ]
        },
        {
            name: '乡村医疗机构卫生床位数',
            type: 'bar',
            data: [
                2484534, 2991372, 3431334, 3755497, 4262661
            ]
        },
        {
            name: '城镇每千人口床位数',
            type: 'line',
            yAxisIndex: 1,
            data: [5.94, 6.88, 7.84, 8.41, 8.70]
        },
        {
            name: '乡村每千人口床位数',
            type: 'line',
            yAxisIndex: 1,
            data: [2.60, 3.11, 3.54, 3.91, 4.56]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_C_MedicalServiceBedAmount.setOption(option);
}