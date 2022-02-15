// D1_City_ExtraClasses
var dom = document.getElementById("D1_City_ExtraClasses");
var myChart_D1_City_ExtraClasses = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '城镇中的中小学生参加课外辅导的情况',
        subtext: '共计1469个调查对象，\n其中484人最近参加课外辅导，985人最近没有参加过',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: '是否参加课外辅导(人数)',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 985, name: '不参加' },
                { value: 484, name: '参加' }
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
    myChart_D1_City_ExtraClasses.setOption(option);
}
