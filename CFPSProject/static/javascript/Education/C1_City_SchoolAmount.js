// C1_City_SchoolAmount
var dom = document.getElementById("C1_City_SchoolAmount");
var myChart_C1_City_SchoolAmount = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '城镇居民居住地界内的学校数目',
        subtext: '共计313个调查对象，其中有小学的164个，有中学的98个',
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
            center:['50%','50%'],
            data: [
                { value: 164, name: '小学' },
                { value: 98, name: '中学' }
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
    myChart_C1_City_SchoolAmount.setOption(option);
}
