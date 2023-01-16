import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoColunaComponent } from './grafico-coluna/grafico-coluna.component';
import { GraficoPizzaComponent } from './grafico-pizza/grafico-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoColunaComponent,
    GraficoPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
