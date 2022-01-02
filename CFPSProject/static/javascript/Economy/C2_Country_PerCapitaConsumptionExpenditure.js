// C2_Country_PerCapitaConsumptionExpenditure
var dom = document.getElementById("C2_Country_PerCapitaConsumptionExpenditure");
var myChart_C2_Country_PerCapitaConsumptionExpenditure = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2018年乡村居民人均消费支出及其构成',
        subtext: '2018年农村居民人均可支配收入14617元'
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
            itemStyle: {
                borderRadius: 8
            },
            labelLine: {
                show: true,
                length: -40,
            },
            data: [
                { value: 3646, name: '食品烟酒' },
                { value: 2661, name: '居住' },
                { value: 1690, name: '交通通信' },
                { value: 1302, name: '教育文化娱乐' },
                { value: 1240, name: '医疗保健' },
                { value: 938, name: '生活用品及其他' },
                { value: 648, name: '衣着' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_C2_Country_PerCapitaConsumptionExpenditure.setOption(option);
}
