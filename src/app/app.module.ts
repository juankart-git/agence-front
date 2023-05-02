import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Report/users/users.component';
import { FotterComponent } from './Util/fotter/fotter.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RelatorioComponent } from './Report/relatorio/relatorio.component';
import { GraficaComponent } from './Report/grafica/grafica.component';
import { PizzaComponent } from './Report/pizza/pizza.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FotterComponent,
    RelatorioComponent,
    GraficaComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [
    ServiceService,
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
