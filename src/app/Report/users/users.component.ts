import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  "users":User[];
  constructor(private service:ServiceService, private router:Router){}

  Report(){
    this.router.navigate(["report"])
  }

  Grafica(){
    this.router.navigate(["grafica"])
  }

  Pizza(){
    this.router.navigate(["pizza"])
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
