import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agence-front-api';

  "users":User[];
  constructor(private service:ServiceService, private router:Router){}

  Report(){
    this.router.navigate(["report"])
  }

  Home() {
    this.router.navigate(["home"])
  }
  
  Relatorio(user:User):void{
    localStorage.setItem("user", user.user.toString());
    localStorage.setItem("userName", user.name.toString());
    this.router.navigate(["relatorio"])
  }

  ngOnInit() {
    this.service.getUsers()
    .subscribe(data => {
      this.users = data;
    });

  }

}
