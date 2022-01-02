// E_Comparison_AfterCompulsoryEducation
var dom = document.getElementById("E_Comparison_AfterCompulsoryEducation");
var myChart_E_Comparison_AfterCompulsoryEducation = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '乡村与城镇义务教育后升学情况占比的比较',
        subtext: '单位：%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    color: ['#5A5476', '#1869A0', '#45C2E0',],
    legend: {
        orient: 'vertical',
        left: 'right'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'20%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['城市', '乡村']
    },
    series: [
        {
            name: '升入高中',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [61, 38],
        },
        {
            name: '升入职业学校',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [26, 30]
        },
        {
            name: '其他去向',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [13, 32]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_E_Comparison_AfterCompulsoryEducation.setOption(option);
}
