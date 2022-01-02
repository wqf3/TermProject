// D1_Distribution_First_Class_Hospital_at_Grade_3_Sun

var dom = document.getElementById("D1_Distribution_First_Class_Hospital_at_Grade_3_Sun");
var myChart_D1_Distribution_First_Class_Hospital_at_Grade_3_Sun = echarts.init(dom);
var app = {};

var option;

var data = [
  {
    name: '东部地区(294所)',
    children: [
      {
        name: '上海',
        value: 24,
      },
      {
        name: '江苏',
        value: 38,
      },
      {
        name: '浙江',
        value: 26,
      },
      {
        name: '北京',
        value: 30,
      },
      {
        name: '天津',
        value: 17,
      },
      {
        name: '山东',
        value: 32,
      },
      {
        name: '福建',
        value: 24,
      },
      {
        name: '广东',
        value: 66,
      },
      {
        name: '河北',
        value: 32,
      },
      {
        name: '海南',
        value: 5,
      }
    ]
  },
  {
    name: '中部地区(165户)',
    children: [
      {
        name: '山西',
        value: 32
      },
      {
        name: '河南',
        value: 24
      },
      {
        name: '安徽',
        value: 20
      },
      {
        name: '湖南',
        value: 20
      },
      {
        name: '江西',
        value: 33
      },
      {
        name: '湖北',
        value: 36
      }
    ]
  },
  {
    name: '西部地区(171所)',
    children: [
      {
        name: '重庆',
        value: 11
      },
      {
        name: '四川',
        value: 36
      },
      {
        name: '云南',
        value: 5
      },
      {
        name: '贵州',
        value: 23
      },
      {
        name: '陕西',
        value: 25
      },
      {
        name: '广西',
        value: 25
      },
      {
        name: '甘肃',
        value: 12
      },
      {
        name: '青海',
        value: 8
      },
      {
        name: '宁夏',
        value: 3
      },
      {
        name: '西藏',
        value: 1
      },
      {
        name: '内蒙古',
        value: 13
      },
      {
        name: '新疆',
        value: 9
      }
    ]
  },
  {
    name: '东北地区(87所)',
    children: [
      {
        name: '辽宁',
        value: 36
      },
      {
        name: '黑龙江',
        value: 31
      },
      {
        name: '吉林',
        value: 20
      }
    ]
  },
];
option = {
  title:{
    text:'2018年全国三甲医院分布情况',
    subtext:'全国共有三甲医院717家(不包括军队医院和中医院)'
    
  },
  series: {
    type: 'sunburst',
    emphasis: {
        focus: 'ancestor'
    },
    data: data,
    radius: [0, '70%'],
    center:['50%','50%'],
    label: {
      rotate: 'radial'
    }
  }
};

if (option && typeof option === 'object') {
    myChart_D1_Distribution_First_Class_Hospital_at_Grade_3_Sun.setOption(option);
}