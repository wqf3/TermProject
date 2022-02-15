// B_CFPS_QuestionnaireComponent
var dom = document.getElementById("B_CFPS_QuestionnaireComponent");
var myChart_B_CFPS_QuestionnaireComponent = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        text: '什么是CFPS?',
        subtext: '中国家庭追踪调查(CFPS)\n主要由以下四种问卷组成',
    },
    tooltip: {
        trigger: 'item'
    },

    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 70,
            //roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [
                {
                    name: 'CFPS',
                    x: 550,
                    y: 300,
                    value: 'China Family Panel Studies'
                },
                {
                    name: '家庭成员问卷',
                    x: 300,
                    y: 300,
                    value: '界定样本家庭的内部关系网络'
                },
                {
                    name: '家庭问卷',
                    x: 800,
                    y: 300,
                    value: '在家庭层面上收集样本的日常生活、经济活动方面的信息。'
                },
                {
                    name: '村居问卷',
                    x: 550,
                    y: 100,
                    value: '了解村（农村社区）或居（城市社区）的基本情况。'
                },
                {
                    name: '个人问卷',
                    x: 550,
                    y: 500,
                    value: '了解受访者个人基本情况'
                }
            ],
            // links: [],
            links: [
                {
                    source: '村居问卷',
                    target: 0,
                    lineStyle: {
                        width: 3,
                        curveness: 0.15
                    }
                },
                {
                    source: '家庭问卷',
                    target: 0,
                    lineStyle: {
                        width: 3,
                        curveness: 0.15
                    }
                },
                {
                    source: '家庭成员问卷',
                    target: 0,
                    lineStyle: {
                        width: 3,
                        curveness: 0.15
                    },
                },
                {
                    source: '个人问卷',
                    target: 0,
                    lineStyle: {
                        width: 3,
                        curveness: 0.15
                    }
                },

            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_B_CFPS_QuestionnaireComponent.setOption(option);
}