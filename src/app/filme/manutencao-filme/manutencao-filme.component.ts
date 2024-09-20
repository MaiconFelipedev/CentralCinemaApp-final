import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Filme} from "../../shared/model/filme";
import {FilmeService} from "../../shared/services/filme.service";
import {NotificacaoService} from "../../shared/services/notificacao.service";
import {FilmeFirestoreService} from "../../shared/services/filme-firestore.service";
import {UrlService} from "../../shared/services/url.service";

@Component({
  selector: 'app-manutencao-filme',
  templateUrl: './manutencao-filme.component.html',
  styleUrl: './manutencao-filme.component.scss'
})
export class ManutencaoFilmeComponent implements OnInit{
  filme = new Filme('');
  modoEdicao = false;

  login: string | null = null;
  constructor(
    private roteador: Router,
    private rotaAtual: ActivatedRoute,
    private filmeService: FilmeFirestoreService,
    private notificacao: NotificacaoService,
    private urlService: UrlService
  ) {

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

  ngOnInit(): void {
    this.urlService.login$.subscribe(login => {
      this.login = login;  // Atualiza o valor do login
      console.log('Login recebido no outro componente:', this.login);
    });
  }

  inserirFilme() {

    if (!this.modoEdicao) {
      try {
        this.filmeService.inserir(this.filme).subscribe(
          resposta => {
            this.roteador.navigate(['/main/listagem-filmes']);
            this.notificacao.sucesso('Usuário cadastrado com sucesso.');
            console.log(this.filme.id)
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
            this.roteador.navigate(['/main/listagem-filmes']);
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
