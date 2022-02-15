var basicParallel;

basicParallel = {
    parallelAxis: [

    ],
    series: {
        type: 'parallel',
        lineStyle: {
            width: 4
        },
        data: [

        ]
    }
};

for (var i = 0; i < dataLen; i++) {
    basicParallel.series.data.push(dataArray[i]);
}

for (var i = 0; i < dataString.length; i++) {
    let tmp = { dim: i, name: dataString[i].substring(0, dataString[i].length - 1) };
    basicParallel.parallelAxis.push(tmp);
}

