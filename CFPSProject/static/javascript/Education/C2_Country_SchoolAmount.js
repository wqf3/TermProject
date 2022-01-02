// C2_Country_SchoolAmount
var dom = document.getElementById("C2_Country_SchoolAmount");
var myChart_C2_Country_SchoolAmount = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '乡村居民居住地界内的学校数目',
        subtext: '共计304个调查对象，其中有小学的175个，有中学的19个',
        left: 'center'
    },
    color: ['#5470c6', '#fac858'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: '数量(所)',
            type: 'pie',
            radius: '50%',
            center: ['50%','55%'],
            avoidLabelOverlap: true,
            data: [
                { value: 175, name: '小学' },
                { value: 19, name: '中学' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_C2_Country_SchoolAmount.setOption(option);
}
