import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficList } from 'src/app/Model/GraficList';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData2:ChartDataset<'pie'>[] = [
    {data:[]}
  ];

  "users":User[];
  "netEarnings" : number[] = [];
  "userData": GraficList;
  "labels" : string[] = [];
  constructor(private service:ServiceService, private router:Router){}

  Report(){
    this.router.navigate(["report"])
  }
  public pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },    
  }
};
 pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: this.labels,
    datasets: [ {
      data: this.netEarnings
    } ]
};
 pieChartType: ChartType = 'pie';


ngOnInit(){
  this.getData();  
}

getData(){
  let message: GraficList[]=[];
  let acum: number = 0;
  this.service.getUsers()
    .subscribe(data => {
      this.users = data;
      this.users.forEach( userItem => {
        this.service.getReport(userItem.user)
          .subscribe(dataReport => {             
            acum = 0;
            this.userData = dataReport;
            message.push(this.userData);
            this.labels.push(this.userData.name.toString());
            this.userData.data.forEach(element => {         
              acum = acum +   element.netEarnings;                 
            });
            this.netEarnings.push(acum);
            this.chart?.update();
            this.chart?.render();
          });

      });        
    });   
  
  
}


  

}
