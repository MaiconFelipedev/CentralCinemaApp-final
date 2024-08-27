import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManutencaoFilmeComponent} from "./filme/manutencao-filme/manutencao-filme.component";

import {ListagemFilmeComponent} from "./filme/listagem-filme/listagem-filme.component";
import {MenuComponent} from "./tela/menu/menu.component";
import {ManutencaoUsuarioComponent} from "./usuario/manutencao-usuario/manutencao-usuario.component";
import {BuscaFilmeComponent} from "./filme/busca-filme/busca-filme.component";
import {LoginComponent} from "./tela/login/login.component";

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'cadastro-usuario',
    component: ManutencaoUsuarioComponent
  },
  {
    path: 'cadastro-usuario/:id',
    component: ManutencaoUsuarioComponent
  },
  {
    path: 'cadastro-filme',
    component: ManutencaoFilmeComponent
  },
  {
    path: 'cadastro-filme/:id',
    component: ManutencaoFilmeComponent
  },
  {
    path: 'listagem-filmes',
    component: ListagemFilmeComponent
  },
  {
    path: 'busca-filmes',
    component: BuscaFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
