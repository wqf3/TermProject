// D2_Country_Division_Area_PerCapitaDisposableIncome
var dom = document.getElementById("D2_Country_Division_Area_PerCapitaDisposableIncome");
var myChart_D2_Country_Division_Area_PerCapitaDisposableIncome = echarts.init(dom);
var app = {};

var option;



setTimeout(function () {
    option = {
        title: {
            text: '乡村居民按地区分组的人均可支配收入',
            subtext: '单位：元'
        },
        legend: {
            top:'bottom',
            data:['','东部地区','中部地区','西部地区','东北地区']
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['年份', '2012', '2014', '2016', '2018'],
                [],
                ['东部地区', 11859, 13145, 15498, 18286],
                ['中部地区', 8932, 10011, 11794, 13954],
                ['西部地区', 7437, 8295, 9918, 11831],
                ['东北地区', 9762, 10802, 12275, 14080]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {
            gridIndex: 0,
            min: 5000,
            max: 20000,
            interval: 5000,
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
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'pie',
                id: 'pie',
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
    myChart_D2_Country_Division_Area_PerCapitaDisposableIncome.on('updateAxisPointer', function (event) {
        const xAxisInfo_D2_Country_Division_Area_PerCapitaDisposableIncome = event.axesInfo[0];
        if (xAxisInfo_D2_Country_Division_Area_PerCapitaDisposableIncome) {
            const dimension_D2_Country_Division_Area_PerCapitaDisposableIncome = xAxisInfo_D2_Country_Division_Area_PerCapitaDisposableIncome.value + 1;
            myChart_D2_Country_Division_Area_PerCapitaDisposableIncome.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension_D2_Country_Division_Area_PerCapitaDisposableIncome + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension_D2_Country_Division_Area_PerCapitaDisposableIncome,
                        tooltip: dimension_D2_Country_Division_Area_PerCapitaDisposableIncome
                    }
                }
            });
        }
    });
    myChart_D2_Country_Division_Area_PerCapitaDisposableIncome.setOption(option);
});

if (option && typeof option === 'object') {
    myChart_D2_Country_Division_Area_PerCapitaDisposableIncome.setOption(option);
}