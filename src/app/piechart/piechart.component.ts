import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartData } from '../chart-data';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  title = 'app';  
    data: ChartData[];  
    url = 'https://testapi.io/api/votinh900/resource/product';  
    productName = [];
    amount = [];
    price = [];  
    chart = [];  
    constructor(private httpClient: HttpClient) { }  
    ngOnInit() {  
      this.httpClient.get(this.url).subscribe((result: ChartData[]) => {  
        result.data.forEach(x => {  
          this.productName.push(x.productName);  
          this.amount.push(x.amount);
          this.amount.push(x.price);    
        });  
        this  
        this.chart = new Chart('canvas', {  
          type: 'pie',  
          data: {  
            labels: this.productName,  
            datasets: [  
              {  
                data: this.amount,  
                borderColor: '#3cba9f',  
                backgroundColor: [  
                  "#3cb371",  
                  "#0000FF",  
                  "#9966FF",  
                  "#4C4CFF",  
                  "#00FFFF",  
                  "#f990a7",  
                  "#aad2ed",  
                  "#FF00FF",  
                  "Blue",  
                  "Red",  
                  "Blue"  
                ],  
                fill: true  
              }  
            ]  
          },  
          options: {  
            legend: {  
              display: true  
            },  
            scales: {  
              xAxes: [{  
                display: true  
              }],  
              yAxes: [{  
                display: true  
              }],  
            }  
          }  
        });  
      });  
    }  

}
