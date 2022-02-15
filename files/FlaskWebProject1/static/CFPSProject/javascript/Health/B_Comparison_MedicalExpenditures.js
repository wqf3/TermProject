// B_Comparison_MedicalExpenditures

var dom = document.getElementById("B_Comparison_MedicalExpenditures");
var myChart_B_Comparison_MedicalExpenditures = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2010-2018年城乡家庭医疗保健开支',
        subtext: '单位：户'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:'bottom',
        data: ['城镇', '乡村']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        top: '20%',
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
        type: 'value'
    },
    series: [
        {
            name: '城镇',
            type: 'line',
            smooth: true,
            data: [3871, 4069, 4822, 6293, 6414]
        },
        {
            name: '乡村',
            type: 'line',
            smooth: true,
            data: [3141, 3914, 4767, 5898, 5943]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_B_Comparison_MedicalExpenditures.setOption(option);
}