var basicRadarChart;

basicRadarChart = {
    title: {
        text: 'Basic Radar Chart'
    },
    legend: {
        data: [],
        bottom:'bottom'
    },
    radar: {
        indicator: [

        ]
    },
    series: [
        {
            name: 'chart1',
            type: 'radar',
            data: [

            ]
        }
    ]
};
 
class value_BasicRadarChart {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }   
}

for (var i = 0; i < dataLen; i++) {
    let tmp = new value_BasicRadarChart(dataTitle[i], dataArray[i]);
    basicRadarChart.legend.data.push(dataTitle[i]);
    basicRadarChart.series[0].data.push(tmp);
}

for (var i = 0; i < dataString.length; i++) {
    let tmp = { name: dataString[i].substring(0, dataString[i].length - 1) };
    basicRadarChart.radar.indicator.push(tmp);
}

