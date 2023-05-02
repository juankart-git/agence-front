import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { UserReport } from 'src/app/Model/UserReport';
import { GraficList } from 'src/app/Model/GraficList';
import { GraficBar } from 'src/app/Model/GraficBar';
import { User } from 'src/app/Model/User';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})

export class GraficaComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData2:ChartDataset<'bar'>[] = [
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'},
    {data:[], label:'1'}
  ];

  "users":User[];
  "userData": GraficList;
  "userDataBar": GraficList[] = [];
  "periods" : String[] = [];
  "netEarnings" : number[] = [];
  "names" : String[] = [];
  "dataGrafic" : GraficBar[] = [];
  "dataObject" : ChartDataset<'bar'> ;
  "dataBar" : ChartData<'bar'>;
  "count" : number = 0;
  constructor(private service:ServiceService, private router:Router){}

  Report(){
    this.router.navigate(["report"])
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
 
  public barChartType: ChartType = 'bar';
  public barChartLegend:boolean = true;

  public barChartData: ChartData<'bar'> = {
    labels: this.periods,
    datasets: this.barChartData2
  };

  public Generate(): void {
    this.chart?.update();
  }  

  ngOnInit(){
    this.getData();    
  }

  getData(){
    let message: GraficList[]=[];

    this.service.getUsers()
      .subscribe(data => {
        this.users = data;
        this.users.forEach( userItem => {
          this.service.getReport(userItem.user)
            .subscribe(dataReport => {
              this.netEarnings = [];
              this.userData = dataReport;
              message.push(this.userData);
              this.barChartData2[this.count].label = this.userData.name.toString();
              this.userData.data.forEach(element => {
                if (!this.periods.includes(element.period)) {
                  this.periods.push(element.period);
                }
                this.netEarnings.push(element.netEarnings);
              });
              this.barChartData2[this.count].data = this.netEarnings;              
              this.barChartData.datasets = this.barChartData2;
              this.count++;
              this.chart?.update();
            });
            this.chart?.update();

        });        
        this.chart?.update();
      });    
      this.chart?.update();
    
    
  }
}
