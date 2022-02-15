// D2_Country_ExtraClasses
var dom = document.getElementById("D2_Country_ExtraClasses");
var myChart_D2_Country_ExtraClasses = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '乡村中的中小学生参加课外辅导的情况',
        subtext: '共计1998个调查对象，\n其中234人最近参加课外辅导，1764人最近没有参加过',
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
                { value: 1764, name: '不参加' },
                { value: 234, name: '参加' }
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
    myChart_D2_Country_ExtraClasses.setOption(option);
}
