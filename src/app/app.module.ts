import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CasaComponent } from './casa/casa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FavoritosComponent } from './favoritos/favoritos.component';






@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    CasaComponent,
    CatalogoComponent,
    DetalhesComponent,
    PerfilComponent,
    FavoritosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterLink,
    CommonModule,
   ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-pt' }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
