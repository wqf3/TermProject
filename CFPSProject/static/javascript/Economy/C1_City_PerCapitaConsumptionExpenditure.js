//  C1_City_PerCapitaConsumptionExpenditure
var dom = document.getElementById("C1_City_PerCapitaConsumptionExpenditure");
var myChart_C1_City_PerCapitaConsumptionExpenditure = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2018年城镇居民人均消费支出及其构成',
        subtext: '2018年城镇居民人均可支配收入26112元'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom'
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         mark: { show: true },
    //         dataView: { show: true, readOnly: false },
    //         restore: { show: true },
    //         saveAsImage: { show: true }
    //     }
    // },
    series: [
        {
            name: '支出(元)',
            type: 'pie',
            radius: [30, 120],
            center: ['50%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8
            },
            labelLine: {
                show: true,
                length: -40
            },
            data: [
                { value: 7239, name: '食品烟酒'},
                { value: 6255, name: '居住'},
                { value: 3473, name: '交通通信'},
                { value: 2974, name: '教育文化娱乐'},
                { value: 2046, name: '医疗保健'},
                { value: 2316, name: '生活用品及其他' },
                { value: 1808, name: '衣着'},
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_C1_City_PerCapitaConsumptionExpenditure.setOption(option);
}
