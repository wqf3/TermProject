var radialPolarBar;

radialPolarBar = {
    title: [
        {
            text: 'Radial Polar Bar Label Position (middle)'
        }
    ],
    polar: {
        radius: [30, '80%']
    },
    radiusAxis: {
        max: Math.max(yearData)
    },
    angleAxis: {
        type: 'category',
        data: dataString,
        startAngle: 75
    },
    tooltip: {},
    series: {
        type: 'bar',
        data: yearData,
        coordinateSystem: 'polar',
        label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
        }
    },
    backgroundColor: '#fff',
    animation: false
};