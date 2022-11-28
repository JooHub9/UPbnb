import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogoComponent} from "./catalogo/catalogo.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {FavoritosComponent} from "./favoritos/favoritos.component";
import {PerfilComponent} from "./perfil/perfil.component";

const routes: Routes = [
  {path: '', redirectTo: '/catalogo', pathMatch: 'full'},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'catalogo/?search=item', component: CatalogoComponent},
  {path: 'detalhes/:id_casa', component: DetalhesComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
