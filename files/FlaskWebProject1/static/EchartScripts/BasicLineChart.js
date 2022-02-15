var basicLineChart;

basicLineChart = {
  xAxis: {
    type: 'category',
    data: dataString
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: yearData,
      type: 'line'
    }
  ]
};
