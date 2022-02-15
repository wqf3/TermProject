// A2_CFPS_SampleSize_Distribution_Pie
var dom = document.getElementById("A2_CFPS_SampleSize_Distribution_Pie");
var myChart_A2_CFPS_SampleSize_Distribution_Pie = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: 'CFPS样本规模及其分布'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom',
        //left: 'center'
    },
    series: [
        {
            name: '目标户数',
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
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
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
                { value: 4000, name: '华东' },
                { value: 1600, name: '华北' },
                { value: 2400, name: '华中' },
                { value: 2000, name: '华南' },
                { value: 2400, name: '东北' },
                { value: 2000, name: '西北' },
                { value: 1600, name: '西南' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_A2_CFPS_SampleSize_Distribution_Pie.setOption(option);
}