import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../Model/User';
import { UserReport } from '../Model/UserReport';
import { GraficList } from '../Model/GraficList';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/user/active-users';
  UrlReporte = 'http://localhost:8080/user/report-users/';
  UrlReportAll = 'http://localhost:8080/user/report/';

  getUsers(){
    return this.http.get<User[]>(this.Url);
  }

  getReportByUser(user:string){
    return this.http.get<UserReport[]>(this.UrlReporte + user);
  }

  getReport(user:String){
    return this.http.get<GraficList>(this.UrlReportAll + user);
  }
}
