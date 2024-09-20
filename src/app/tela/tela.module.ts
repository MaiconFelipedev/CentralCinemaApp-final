import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';



@NgModule({
    declarations: [
        MenuComponent,
        LoginComponent,
        MainComponent
    ],
  exports: [
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatToolbar,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLink,
    RouterOutlet,
    MatIcon,
    ReactiveFormsModule,
    MatIconButton
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TelaModule { }
