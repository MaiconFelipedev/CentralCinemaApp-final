import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoUsuarioComponent } from './manutencao-usuario/manutencao-usuario.component';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatMenu} from "@angular/material/menu";



@NgModule({
  declarations: [
    ManutencaoUsuarioComponent
  ],
  exports: [ManutencaoUsuarioComponent],
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    FormsModule,
    MatInput,
    MatCardFooter,
    MatIconButton,
    MatIcon,
    RouterOutlet,
    RouterLink,
    MatMenu
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsuarioModule { }