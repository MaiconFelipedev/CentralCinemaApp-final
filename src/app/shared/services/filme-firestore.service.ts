import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, Observable} from "rxjs";
import {Filme} from "../model/filme";

@Injectable({
  providedIn: 'root'
})
export class FilmeFirestoreService {
  colecaoFilmes: AngularFirestoreCollection<Filme>;
  NOME_COLECAO = 'filmes';

  // acessa qualquer coleção
  constructor(private afs: AngularFirestore) {
    this.colecaoFilmes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Filme[]> {
    // toda alteração no banco a tela será alterada também
    return this.colecaoFilmes.valueChanges( {idField: 'id'} );
  }

  // devolve data document
  inserir(usuario: Filme): Observable<object> {
    const id = usuario.id;
    delete usuario.id;
    // transformar de promessa para observable
    return from(this.colecaoFilmes.add(Object.assign({}, usuario)));
  }

  buscarPorId(id: string): Observable<Filme | undefined> {
    return this.colecaoFilmes.doc(id).valueChanges( {idField: 'id'} );
  }

  editar(usuario: Filme): Observable<void> {
    const id = usuario.id;
    delete usuario.id;
    // Atualizamos o documento no Firestore com a cópia sem o campo 'id'
    return from(this.colecaoFilmes.doc(id).update(Object.assign({}, usuario)));
  }

  // Função de remover recebendo um objeto do tipo Filme
  remover(filmeARemover: Filme): Observable<void> {
    return from(this.colecaoFilmes.doc(filmeARemover.id).delete());
  }



}

