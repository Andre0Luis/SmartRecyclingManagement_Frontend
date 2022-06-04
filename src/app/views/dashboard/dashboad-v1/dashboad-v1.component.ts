import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { StatusMensalDTO } from 'src/app/data/statusMensalDTO';
import { ProductService } from 'src/app/services/product.service';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
    selector: 'app-dashboad-v1',
    templateUrl: './dashboad-v1.component.html',
    styleUrls: ['./dashboad-v1.component.css']
})
export class DashboadOneComponent implements OnInit {

    id: Number = 1;

    statusMensal: StatusMensalDTO = {};

    chartLineOption1: EChartOption;
    chartLineOption2: EChartOption;
    salesChartBar: EChartOption;



    constructor(private productService: ProductService) { }

    ngOnInit() {
        var gastoMes;
        this.productService.getConsumoMensal(this.id).subscribe(res => {
            this.statusMensal = res;
            gastoMes = res.gastoMensal;
            console.log(gastoMes);
        }
        );

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
                data: ['Gastos Mensais'],
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
                data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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
                max: 1000,
                interval: 50,
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
                name: 'Gastos Mensais',
                data: [0, 0, 0, 0, 100, gastoMes, 0, 0, 0, 0, 0, 0],
                label: { show: false, color: '#0168c1' },
                type: 'line',
                barGap: 0,
                color: '#bcbbdd',
                smooth: true,

            }

            ]
        };
    }
}
