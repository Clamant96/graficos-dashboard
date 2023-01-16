import { GraficoPizzaComponent } from './grafico-pizza/grafico-pizza.component';
import { GraficoColunaComponent } from './grafico-coluna/grafico-coluna.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* ACESSO VAZIO */
  {
    path: '',
    redirectTo: 'grafico-pizza',
    pathMatch: 'full'
  },
  /* ============  */
  {
    path: 'grafico-coluna',
    component: GraficoColunaComponent
  },
  {
    path: 'grafico-pizza',
    component: GraficoPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
