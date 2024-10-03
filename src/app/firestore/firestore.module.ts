import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {AppComponent} from "../app.component";
import {firebaseConfig} from "../../../firestore.config";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ]
})
export class FirestoreModule { }
