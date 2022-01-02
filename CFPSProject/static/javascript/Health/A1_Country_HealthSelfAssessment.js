// A1_Country_HealthSelfAssessment
var dom = document.getElementById("A1_Country_HealthSelfAssessment");
var myChart_A1_Country_HealthSelfAssessment = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: '乡村居民健康状况自我评估',
        subtext: '共计17471个调查对象',
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
                { value: 5118, name: '很健康' },
                { value: 5767, name: '比较健康' },
                { value: 2119, name: '一般' },
                { value: 4467, name: '不健康' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_A1_Country_HealthSelfAssessment.setOption(option);
}
