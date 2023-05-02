import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent {

  constructor(private router:Router){}
  Report(){
    this.router.navigate(["report"])
  }

}
