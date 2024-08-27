import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoFilmeComponent } from './manutencao-filme/manutencao-filme.component';
import { ListagemFilmeComponent } from './listagem-filme/listagem-filme.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {AppComponent} from "../app.component";
import {HttpClientModule} from "@angular/common/http";
import { BuscaFilmeComponent } from './busca-filme/busca-filme.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatRadioModule} from '@angular/material/radio';
import {MatMenu} from "@angular/material/menu";


@NgModule({
  declarations: [
    ManutencaoFilmeComponent,
    ListagemFilmeComponent,
    BuscaFilmeComponent
  ],
  exports: [
    ListagemFilmeComponent,
    ManutencaoFilmeComponent,
    BuscaFilmeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatCard,
    MatCardContent,
    MatTable,
    MatToolbar,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatCardHeader,
    MatFormField,
    MatInput,
    FormsModule,
    MatCardFooter,
    MatButton,
    HttpClientModule,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    RouterOutlet,
    MatInputModule,
    MatRadioGroup,
    MatRadioButton,
    MatRadioModule,
    MatMenu
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FilmeModule { }
