import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserReport } from 'src/app/Model/UserReport';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  "userData": UserReport[];
  "userName": String;
  "saldo": number = 0;
  "saldoFormat": string;
  "saldoGasto": number = 0;
  "saldoGastoFormat": string;
  "saldoComision": number = 0;
  "saldoComisionFormat": string;
  "saldoLucro": number = 0;
  "saldoLucroFormat": string;
  constructor(private router:Router, private service:ServiceService){ }

  ngOnInit(){
    this.getData();
  }

  Report(){
    this.router.navigate(["report"])
  }

  getData(){
    let userMail = localStorage.getItem("user") || '{}';    
    this.userName = localStorage.getItem("userName") || '{}';;
    this.service.getReportByUser(userMail)
    .subscribe(data => {
      this.userData = data;    
      this.userData.forEach(item => { 
        this.saldo = this.saldo + item.netEarnings;
        this.saldoGasto = this.saldoGasto + item.costFixed;
        this.saldoComision = this.saldoComision +  item.commission;
        this.saldoLucro = this.saldoLucro +  item.profit;

        item.netEarningsFormat = "R$ " + item.netEarnings.toLocaleString("pt-BR");
        item.costFixedFormat = "R$ " + item.costFixed.toLocaleString("pt-BR");
        item.commissionFormat = "R$ " + item.commission.toLocaleString("pt-BR");
        item.profitFormat = "R$ " + item.profit.toLocaleString("pt-BR");
      });
      this.saldoFormat = "R$ " + this.saldo.toLocaleString("pt-BR").toString();
      this.saldoGastoFormat = "R$ " + this.saldoGasto.toLocaleString("pt-BR").toString();
      this.saldoComisionFormat = "R$ " + this.saldoComision.toLocaleString("pt-BR").toString();
      this.saldoLucroFormat = "R$ " + this.saldoLucro.toLocaleString("pt-BR").toString();
    });
  }
}
