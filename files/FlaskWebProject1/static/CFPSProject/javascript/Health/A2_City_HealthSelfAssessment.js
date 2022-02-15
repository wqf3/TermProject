// A2_City_HealthSelfAssessment
var dom = document.getElementById("A2_City_HealthSelfAssessment");
var myChart_A2_City_HealthSelfAssessment = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: '城镇居民健康状况自我评估',
        subtext: '共计17245个调查对象',
        left: 'center',
    },
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '健康状况评估',
            type: 'pie',
            radius: ['20%', '40%'],
            center:['50%','50%'],
            avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true,
                length: 30
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c} \n {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: 5145, name: '很健康' },
                { value: 7427, name: '比较健康' },
                { value: 4760, name: '一般' },
                { value: 2425, name: '不健康' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_A2_City_HealthSelfAssessment.setOption(option);
}
