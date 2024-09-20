import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./tela/login/login.component";
import {MainComponent} from "./tela/main/main.component";
import {ManutencaoUsuarioComponent} from "./usuario/manutencao-usuario/manutencao-usuario.component";
import {ManutencaoFilmeComponent} from "./filme/manutencao-filme/manutencao-filme.component";
import {ListagemFilmeComponent} from "./filme/listagem-filme/listagem-filme.component";
import {MenuComponent} from "./tela/menu/menu.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent}, // Tela de login
  {path: 'cadastro-usuario', component: ManutencaoUsuarioComponent},
  {path: 'cadastro-usuario/:id', component: ManutencaoUsuarioComponent},
  {
    path: 'main/:login',
    component: MainComponent, // Layout com o menu
    children: [
      {path: 'cadastro-filme', component: ManutencaoFilmeComponent},
      {path: 'cadastro-filme/:id', component: ManutencaoFilmeComponent},
      {path: 'listagem-filmes', component: ListagemFilmeComponent},
      //{path: '', redirectTo: 'listagem-filmes', pathMatch: 'full'} // Redireciona para a listagem-filmes por padrão
    ]
  },

  {path: '', redirectTo: 'login', pathMatch: 'full'}, // Redireciona para a tela de login por padrão
  {path: '**', redirectTo: 'login'} // Redireciona para a tela de login para rotas desconhecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
