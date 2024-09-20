import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  private login: string | null = null;  // Variável para armazenar o login

  constructor(private route: ActivatedRoute) {}

  // Função para capturar o login da rota e retornar como string
  captureLoginFromRoute(): string | null {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.login = params.get('login');  // Captura o parâmetro 'login'
      console.log('Login capturado:', this.login);
    });

    return this.login;  // Retorna o login (pode ser null se não estiver definido)
  }

  // Função para acessar diretamente o valor atual de login
  getCurrentLogin(): string | null {
    return this.login;
  }

}
