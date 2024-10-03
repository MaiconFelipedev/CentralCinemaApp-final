import { Component } from '@angular/core';
import { Usuario } from "../../shared/model/usuario";
import { Router } from "@angular/router";
import { UsuarioService } from "../../shared/services/usuario.service";
import { NotificacaoService } from "../../shared/services/notificacao.service";

@Component({
  selector: 'app-manutencao-usuario',
  templateUrl: './manutencao-usuario.component.html',
  styleUrls: ['./manutencao-usuario.component.scss']
})
export class ManutencaoUsuarioComponent {
  usuario = new Usuario();

  constructor(
    private roteador: Router,
    private usuarioService: UsuarioService,
    private notificacao: NotificacaoService
  ) {}

  inserirUsuario() {
    // Cadastro de novo usuário
    this.usuarioService.inserir(this.usuario).subscribe(
      resposta => {
        this.roteador.navigate(['/login']); // Redireciona para a tela de login após o cadastro
        this.notificacao.sucesso('Usuário cadastrado com sucesso.');
      },
      erro => {
        this.notificacao.erro("Erro ao cadastrar o usuário.");
      }
    );
  }
  voltar() {
    this.roteador.navigate(['/login']); // Altere para o caminho que deseja voltar
  }
}
