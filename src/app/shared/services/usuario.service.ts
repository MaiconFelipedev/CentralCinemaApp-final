import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_USUARIOS = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) { }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }

  remover(usuario: Usuario): Observable<object> {
    return this.httpClient.delete(`${this.URL_USUARIOS}/${usuario.id}`);
  }

  buscarPorId(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  buscarPorEmail(email: string): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.URL_USUARIOS}?login=${email}`);
  }

}
