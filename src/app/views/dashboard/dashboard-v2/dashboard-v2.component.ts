import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardTwoComponent implements OnInit {
  chartPie1: any;
  saleOptions: any;
	products$: any;

  constructor(
		private productService: ProductService
	) { }

  ngOnInit() {
    this.chartPie1 = {
			...echartStyles.defaultOptions, ...{
        legend: {
          show: true,
          bottom: 0,
        },
				series: [{
          type: 'pie',
          ...echartStyles.pieRing,

          label: echartStyles.pieLabelCenterHover,
					data: [{
						name: 'Completed',
						value: 80,
						itemStyle: {
							color: '#663399',
						}
					}, {
						name: 'Pending',
						value: 20,
						itemStyle: {
							color: '#ced4da',
						}
					}]
				}]
			}
    };

    this.saleOptions = {
       tooltip: {
         backgroundColor: 'rgba(0, 0, 0, .8)',
         trigger: 'axis',
         axisPointer: {
           type: 'cross',
           label: {
             backgroundColor: '#6a7985'
           }
         }
       },
       legend: {
         data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
       },
       grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
       },
       xAxis: [
         {
           type: 'category',
           boundaryGap: false,
           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
         }
       ],
       yAxis: [
         {
           type: 'value'
         }
       ],
       series: [
         {
           name: 'X-1',
           type: 'line',
           stack: 'counts',
           areaStyle: { normal: {} },
           data: [120, 132, 101, 134, 90, 230, 210],
           label: { show: false, color: '#0168c1' },
           color: 'rgba(138, 109, 236, 0.4)'
         },
         {
           name: 'X-2',
           type: 'line',
           stack: 'counts',
           areaStyle: { normal: {} },
           data: [220, 182, 191, 234, 290, 330, 310],
           label: { show: false, color: '#639' },
           color: '#906afb',
         }
       ]
     };
	
   this.products$ = this.productService.getProducts();

  }

}
