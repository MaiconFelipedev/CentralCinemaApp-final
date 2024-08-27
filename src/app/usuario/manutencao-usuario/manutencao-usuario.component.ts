import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuario.service";
import {NotificacaoService} from "../../shared/services/notificacao.service";

@Component({
  selector: 'app-manutencao-usuario',
  templateUrl: './manutencao-usuario.component.html',
  styleUrl: './manutencao-usuario.component.scss'
})
export class ManutencaoUsuarioComponent {
  usuario = new Usuario('1', '', '', '');
  modoEdicao = false;

  constructor(private roteador: Router, private rotaAtual: ActivatedRoute,
              private usuarioService: UsuarioService, private notificacao: NotificacaoService) {

    this.usuarioService.listar().subscribe(usuarios => {
      if (usuarios && usuarios.length > 0) {
        const maiorId = Math.max(...usuarios.map(usuario => Number(usuario.id)));
        this.usuario.id = (maiorId + 1).toString();
      } else {
        // Se não houver usuarios, o ID começa em 1
        this.usuario.id = '1';
      }
    })
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.modoEdicao = true;

      //const usuarioAEditar = usuarioService.listar().find(usuario => usuario.id == idParaEdicao);
      this.usuarioService.buscarPorId(idParaEdicao).subscribe(
        resposta => {
          if (resposta) {
            this.usuario = resposta;
          }
        }
      )
    }
  }

  inserirUsuario() {

    if (!this.modoEdicao) {
      try {
        this.usuarioService.inserir(this.usuario).subscribe(
          resposta => {
            this.roteador.navigate(['listagem-usuarios']);
            this.usuario = new Usuario('1', '', '', '');
            this.notificacao.sucesso('Usuário cadastrado com sucesso.');
          }
        )
      }
      catch (e: any) {
        this.notificacao.erro(e.message);
      }
    }
    else {
      try {
        this.usuarioService.editar(this.usuario).subscribe(
          resposta => {
            this.roteador.navigate(['listagem-usuarios']);
            this.usuario = new Usuario('1', '', '', '');
            this.notificacao.sucesso('Usuário editado com sucesso.');
          }
        )
      }
      catch (e: any){
        this.notificacao.erro(e.message);
      }
    }
  }

}
