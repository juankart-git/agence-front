import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Report/users/users.component';
import { RelatorioComponent } from './Report/relatorio/relatorio.component';
import { AppComponent } from './app.component';
import { PizzaComponent } from './Report/pizza/pizza.component';
import { GraficaComponent } from './Report/grafica/grafica.component';

const routes: Routes = [
  { path:'report', component:UsersComponent },
  { path:'relatorio', component:RelatorioComponent },
  { path:'grafica', component:GraficaComponent },
  { path:'pizza', component:PizzaComponent },
  { path:'home', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
