import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Filme} from "../../shared/model/filme";
import {FilmeService} from "../../shared/services/filme.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrl: './listagem-filme.component.scss'
})
export class ListagemFilmeComponent implements OnInit {

  dataSource: MatTableDataSource<Filme>;
  mostrarColunas = ['id','titulo','ano','categoria']

  constructor(private filmeService: FilmeService, private roteador: Router){
    this.dataSource = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      resposta => this.dataSource = new MatTableDataSource(resposta)
    )
  }

  editar(filme:Filme): void {
    this.roteador.navigate(['cadastro-filme', filme.id]);
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
