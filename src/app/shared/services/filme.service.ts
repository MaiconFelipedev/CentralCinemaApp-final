import { Injectable } from '@angular/core';
import {Filme} from "../model/filme";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  URL_FILMES = 'http://localhost:3000/filmes';

  constructor(private httpClient: HttpClient) { }

  inserir(filme: Filme): Observable<Filme> {
    return this.httpClient.post<Filme>(this.URL_FILMES, filme);
  }

  listar(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.URL_FILMES);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.httpClient.put<Filme>(`${this.URL_FILMES}/${filme.id}`, filme);
  }

  remover(filme: Filme): Observable<object> {
    return this.httpClient.delete(`${this.URL_FILMES}/${filme.id}`);
  }

  buscarPorId(id: string): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.URL_FILMES}/${id}`);
  }
}
