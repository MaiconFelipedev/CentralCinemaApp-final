import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Filme} from "../../shared/model/filme";
import {FilmeService} from "../../shared/services/filme.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmeFirestoreService} from "../../shared/services/filme-firestore.service";
import {MainComponent} from "../../tela/main/main.component";
import {UrlService} from "../../shared/services/url.service";

@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrl: './listagem-filme.component.scss'
})
export class ListagemFilmeComponent implements OnInit {
  login: string | null = null;  // Variável para armazenar o login
  dataSource: MatTableDataSource<Filme>;
  mostrarColunas = ['id','titulo','ano','categoria']

  constructor(private filmeService: FilmeFirestoreService, private roteador: Router, private route: ActivatedRoute, private urlService: UrlService) {
    this.dataSource = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      resposta => this.dataSource = new MatTableDataSource(resposta)
    )


    this.urlService.login$.subscribe(login => {
      this.login = login;  // Atualiza o valor do login
      console.log('Login recebido no outro componente:', this.login);
    })

  }

  filtrar(evento: Event) {
    const texto =  (evento.target as HTMLInputElement).value;
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  editar(filme:Filme): void {
    this.roteador.navigate([`/main/${this.login}/cadastro-filme`, filme.id]);
  }

  remover(filme:Filme): void {
    this.filmeService.remover(filme).subscribe(
      resposta => {
        const idxRemocao = this.dataSource.data.findIndex(f => f.id === filme.id);
        if(idxRemocao > -1) {
          this.dataSource.data.splice(idxRemocao, 1);
          this.dataSource = new MatTableDataSource<Filme>(this.dataSource.data)
        }
      }
    )
  }

}
