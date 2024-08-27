import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Filme} from "../../shared/model/filme";
import {FilmeService} from "../../shared/services/filme.service";
import {NotificacaoService} from "../../shared/services/notificacao.service";

@Component({
  selector: 'app-manutencao-filme',
  templateUrl: './manutencao-filme.component.html',
  styleUrl: './manutencao-filme.component.scss'
})
export class ManutencaoFilmeComponent {
  filme = new Filme('1', '', null, '');
  modoEdicao = false;

  constructor(private roteador: Router, private rotaAtual: ActivatedRoute,
              private filmeService: FilmeService, private notificacao: NotificacaoService) {

    this.filmeService.listar().subscribe(filmes => {
      if (filmes) { // && filmes.length > null
        const maiorId = Math.max(...filmes.map(filme => Number(filme.id)));
        this.filme.id = (maiorId + 1).toString();
      } else {
        // Se não houver filmes, o ID começa em 1
        this.filme.id = '1';
      }
    })
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.modoEdicao = true;

      //const filmeAEditar = filmeService.listar().find(filme => filme.id == idParaEdicao);
      this.filmeService.buscarPorId(idParaEdicao).subscribe(
        resposta => {
          if (resposta) {
            this.filme = resposta;
          }
        }
      )
    }
  }

  inserirFilme() {

    if (!this.modoEdicao) {
      try {
        this.filmeService.inserir(this.filme).subscribe(
          resposta => {
            this.roteador.navigate(['listagem-filmes']);
            this.filme = new Filme('1', '', null, '');
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
        this.filmeService.editar(this.filme).subscribe(
          resposta => {
            this.roteador.navigate(['listagem-filmes']);
            this.filme = new Filme('1', '', null, '');
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
