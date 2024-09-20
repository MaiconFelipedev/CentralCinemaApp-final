import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private loginSubject = new BehaviorSubject<string | null>(null);
  login$ = this.loginSubject.asObservable();

  setLogin(login: string | null) {
    this.loginSubject.next(login);
  }
}
