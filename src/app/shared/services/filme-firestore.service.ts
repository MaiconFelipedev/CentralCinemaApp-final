import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, Observable} from "rxjs";
import {Filme} from "../model/filme";

@Injectable({
  providedIn: 'root'
})
export class FilmeFirestoreService {
  // API do Firestore no Angular
  colecaoFilmes: AngularFirestoreCollection<Filme>;
  NOME_COLECAO = 'filmes';

  // Apontador para o BD Firestore; AngularFirestore é algo genérico
  constructor(private afs: AngularFirestore) {
    // Coleção individual; Linkando as coleções
    this.colecaoFilmes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Filme[]> {
    // As alterações do BD terão resultado na tela
      // id é aleatório e gerado pelo google
      // Ligação direta com o BD pelo Value Changes
    return this.colecaoFilmes.valueChanges( {idField: 'id'} );
  }

  // Devolve Document Reference do tipo Usuário
  inserir(filme: Filme): Observable<object> {
    const id = filme.id;
    delete filme.id;
    // Transformar de promessa para observable: Usando o 'from'
      // Object Assign: Cria um Objeto limpo passando os dados de usuário
    return from(this.colecaoFilmes.add(Object.assign({}, filme)));
  }

  buscarPorId(id: string): Observable<Filme | undefined> {
    return this.colecaoFilmes.doc(id).valueChanges( {idField: 'id'} );
  }

  editar(usuario: Filme): Observable<void> {
    // Apagar: se eu passar esse id irá criar um novo campo id na coleção
      // Evitar ID Duplicado
    const id = usuario.id;
    delete usuario.id;
    // Atualizamos o documento no Firestore com a cópia sem o campo 'id'
    return from(this.colecaoFilmes.doc(id).update(Object.assign({}, usuario)));
  }

  // Função de remover recebendo um objeto do tipo Filme
  remover(filmeARemover: Filme): Observable<void> {
    return from(this.colecaoFilmes.doc(filmeARemover.id).delete());
  }

  listarMaisVelhos(): Observable<Filme[]> {
    // Criando referência para nova Coleção
    let filmesMaisVelhos: AngularFirestoreCollection<Filme>;
    filmesMaisVelhos = this.afs.collection(
        this.NOME_COLECAO,
        // Podemos acrescentar vários campos, até mesmo usar 'and'
        ref => ref.where('ano', '<', 2000)
    );
    return filmesMaisVelhos.valueChanges();
  }
}
