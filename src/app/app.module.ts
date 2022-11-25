import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Importei isto para os SVG files
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CasaComponent } from './casa/casa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    CasaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule, AngularSvgIconModule.forRoot(), //colocado aqui para SVG files
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
