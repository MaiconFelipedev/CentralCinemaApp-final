import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TelaModule} from "./tela/tela.module";
import {FilmeModule} from "./filme/filme.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {FirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "../../firestore.config";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaModule,
    FilmeModule,
    UsuarioModule,
    FirestoreModule,
    // Inicialize o Firebase com a configuração correta do environment
    AngularFireModule.initializeApp(firebaseConfig), // Certifique-se que o environment possui firebaseConfig
    AngularFirestoreModule, // Importa o módulo Firestore para usar no projeto
  ],
  schemas:
    [ CUSTOM_ELEMENTS_SCHEMA ]
  ,
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
