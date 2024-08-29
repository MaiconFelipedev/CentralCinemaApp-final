import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  url:string = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.getCurrentUrl();
      }



  getCurrentUrl() {
    this.url = this.router.url;
    console.log(this.url);
  }
}
