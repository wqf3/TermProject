// D1_City_Division_Area_PerCapitaDisposableIncome
var dom = document.getElementById("D1_City_Division_Area_PerCapitaDisposableIncome");
var myChart_D1_City_Division_Area_PerCapitaDisposableIncome = echarts.init(dom);
var app = {};

var option;

setTimeout(function () {
    option = {
        title: {
            text: '城镇居民按地区分组的人均可支配收入',
            subtext: '单位：元'
        },
        legend: { 
            top:'bottom',
            data:['','东部地区','中部地区','西部地区','东北地区']
        },
        tooltip: {
            trigger: 'axis',
            showContent: false,
        },
        dataset: {
            source: [
                ['年份', '2012', '2014', '2016', '2018'],
                [],
                ['东部地区', 31152, 33905, 39651, 46432],
                ['中部地区', 22664, 24733, 28879, 33803],
                ['西部地区', 22362, 24390, 28609, 33387],
                ['东北地区', 23507, 25579, 29045, 32994]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {
            gridIndex: 0,
            min: 20000,
            max: 50000,
            interval: 10000,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        grid: { top: '55%' },
        series: [
            {
                show:false,
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'pie',
                id: 'pie_myChart_D1_City_Division_Area_PerCapitaDisposableIncome',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: '年份',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };
    myChart_D1_City_Division_Area_PerCapitaDisposableIncome.on('updateAxisPointer', function (event) {
        var xAxisInfo_myChart_D1_City_Division_Area_PerCapitaDisposableIncome = event.axesInfo[0];
        if (xAxisInfo_myChart_D1_City_Division_Area_PerCapitaDisposableIncome) {
            var dimension_myChart_D1_City_Division_Area_PerCapitaDisposableIncome = xAxisInfo_myChart_D1_City_Division_Area_PerCapitaDisposableIncome.value + 1;
            myChart_D1_City_Division_Area_PerCapitaDisposableIncome.setOption({
                series: {
                    id: 'pie_myChart_D1_City_Division_Area_PerCapitaDisposableIncome',
                    label: {
                        formatter: '{b}: {@[' + dimension_myChart_D1_City_Division_Area_PerCapitaDisposableIncome + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension_myChart_D1_City_Division_Area_PerCapitaDisposableIncome,
                        tooltip: dimension_myChart_D1_City_Division_Area_PerCapitaDisposableIncome
                    }
                }
            });
        }
    });
    myChart_D1_City_Division_Area_PerCapitaDisposableIncome.setOption(option);
});

if (option && typeof option === 'object') {
    myChart_D1_City_Division_Area_PerCapitaDisposableIncome.setOption(option);
}