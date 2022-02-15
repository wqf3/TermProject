// D2_Distribution_First_Class_Hospital_at_Grade_3_Pie 
var dom = document.getElementById("D2_Distribution_First_Class_Hospital_at_Grade_3_Pie");
var myChart_D2_Distribution_First_Class_Hospital_at_Grade_3_Pie = echarts.init(dom);
var app = {};

var option;

option = {
   title: {
    text: '2018年全国三甲医院分布情况',
    subtext:'全国共有三甲医院717家(不包括军队医院和中医院)'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 'bottom',
  },
  series: [
    {
      name: '三甲医院数',
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
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
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
        { value: 294, name: '东部地区' },
        { value: 165, name: '中部地区' },
        { value: 87, name: '东北地区'},
        { value: 171, name: '西部地区' }
      ]
    },
    {
      
    }
  ]
};

if (option && typeof option === 'object') {
    myChart_D2_Distribution_First_Class_Hospital_at_Grade_3_Pie.setOption(option);
}