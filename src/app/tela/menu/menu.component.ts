import {Component, OnInit} from '@angular/core';
import {MatMenuPanel} from "@angular/material/menu";
import {ActivatedRoute} from "@angular/router";
import {UrlService} from "../../shared/services/url.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  login: string | null = null;

  constructor(private route: ActivatedRoute, private authService: UrlService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.login = params.get('login');
      console.log('Login capturado:', this.login);
      this.authService.setLogin(this.login);  // Armazena o login no serviço
    });
  }
}
