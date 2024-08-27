import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioService } from "../../shared/services/usuario.service";
import { Usuario } from "../../shared/model/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  resposta = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  submitLogin() {
    const dadosLogin = this.loginForm.getRawValue(); // Extrai os dados do formulário

    this.usuarioService.buscarPorEmail(dadosLogin.login).subscribe({
      next: (usuarios: Usuario[]) => {
        if (usuarios.length > 0) {
          const usuarioEncontrado = usuarios[0];
          if (usuarioEncontrado.senha === dadosLogin.senha) {
            //this.resposta = 'Login bem-sucedido!';
            this.router.navigate(['menu']);
          } else {
            this.resposta = 'Senha incorreta.';
          }
        } else {
          this.resposta = 'Usuário não encontrado.';
        }
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
      }
    });
  }
}
