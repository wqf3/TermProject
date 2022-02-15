var themeRiver;

themeRiver = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },
    legend: {
        data: [],
        bottom:'bottom'
    },
    singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        axisPointer: {
            animation: true,
            label: {
                show: true
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },
    series: [
        {
            type: 'themeRiver',
            emphasis: {
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: []
        }
    ]
};

for (var i = 0; i < dataLen; i++) {
    let Year = dataString;
    for (var j = 0; j < 5; j++) {
        themeRiver.series[0].data.push([Year[j].substring(0,Year[j].length-1), dataArray[i][j],dataTitle[i]]);
    }
    themeRiver.legend.data.push(dataTitle[i]);
}
