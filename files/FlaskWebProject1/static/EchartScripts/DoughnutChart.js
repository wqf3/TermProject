var doughnutChart;

doughnutChart = {
    title: {
        text: 'Doughnut Chart',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom:'bottom'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [

            ]
        }
    ]
};

for (var i = 0; i < dataString.length; i++) {
    let tmp = { value: yearData[i], name: dataString[i] };
    doughnutChart.series[0].data.push(tmp);
}