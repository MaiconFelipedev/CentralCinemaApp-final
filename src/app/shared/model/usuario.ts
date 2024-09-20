import {Filme} from "./filme";

export class Usuario {

  public id?: string;
  public nome?: string;
  public login?: string;
  public senha?: string;
  public filmes?: Filme[]


  constructor(
    id?: string,
    usuario: Usuario = {}
  ){
    this.id = id;
    this.nome = usuario.nome;
    this.login = usuario.login;
    this.senha = usuario.senha;
    this.filmes = usuario.filmes;
  }
}
