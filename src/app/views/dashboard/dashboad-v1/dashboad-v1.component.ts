import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
	selector: 'app-dashboad-v1',
	templateUrl: './dashboad-v1.component.html',
	styleUrls: ['./dashboad-v1.component.css']
})
export class DashboadOneComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
    salesChartBar: EChartOption;

	constructor() { }

	ngOnInit() {
		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(138, 109, 236, 0.4)',
						origin: 'start'
					},
					lineStyle: {
						color: '#906afb',
					},
					itemStyle: {
						color: '#906afb'
					}
				}]
			}
		};
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 10, 40, 10, 40, 20, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#f45905'
					},
					itemStyle: {
						color: '#f45905'
					}
				}]
			}
		};
		this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }

            ],

            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'line',
                    barGap: 0,
                    color: '#bcbbdd',
                    smooth: true,

                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'line',
                    color: '#7569b3',
                    smooth: true
                }

            ]
        };
	}
}
