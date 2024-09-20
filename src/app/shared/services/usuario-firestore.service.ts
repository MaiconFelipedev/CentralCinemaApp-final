import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Usuario} from "../model/usuario";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  // acessa qualquer coleção
  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    // toda alteração no banco a tela será alterada também
    return this.colecaoUsuarios.valueChanges( {idField: 'id'} );
  }

  // devolve data document
  inserir(usuario: Usuario): Observable<object> {
    // transformar de promessa para observable
    return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }

  buscarPorId(id: string): Observable<Usuario | undefined> {
    return this.colecaoUsuarios.doc(id).valueChanges( {idField: 'id'} );
  }

  editar(usuario: Usuario): Observable<void> {
    const id = usuario.id;

    if (!id) {
      throw new Error("ID do usuário é obrigatório para editar.");
    }

    // Criamos uma cópia do objeto, omitindo o campo 'id'
    const { id: _, ...usuarioSemId } = usuario;

    // Atualizamos o documento no Firestore com a cópia sem o campo 'id'
    return from(this.colecaoUsuarios.doc(id).update(Object.assign({}, usuarioSemId)));
  }





}
