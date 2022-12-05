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
import { ImagemComponent } from './imagem/imagem.component';
import { RegrasComponent } from './regras/regras.component';
import { AnfitriaoComponent } from './anfitriao/anfitriao.component';
import { GaleriaComponent } from './galeria/galeria.component';
import {FormsModule} from "@angular/forms";
import { ComentarioComponent } from './comentario/comentario.component';




@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    CasaComponent,
    CatalogoComponent,
    DetalhesComponent,
    PerfilComponent,
    FavoritosComponent,
    ImagemComponent,
    RegrasComponent,
    AnfitriaoComponent,
    GaleriaComponent,
    ComentarioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterLink,
    CommonModule,
    FormsModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-pt' }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
