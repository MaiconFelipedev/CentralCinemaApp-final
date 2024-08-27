import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TelaModule} from "./tela/tela.module";
import {FilmeModule} from "./filme/filme.module";
import {UsuarioModule} from "./usuario/usuario.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaModule,
    FilmeModule,
    UsuarioModule
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
