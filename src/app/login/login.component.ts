import { Component } from '@angular/core';
import { Login_RegistroService } from '../Service/LoginYRegistro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombre: string = '';
  password: string = '';
  sesionExitosa: boolean = false;

  constructor(
    private serviciosPersona: Login_RegistroService,
    private router: Router
  ) {}

  // Assuming verificarLogin returns a boolean indicating the success of the login
  verificarSesion(): boolean {
    this.sesionExitosa = this.serviciosPersona.verificarLogin(
      this.nombre,
      this.password
    );
    return this.sesionExitosa;
  }

  redireccionarSegunSesion(): void {
    const sesionExitosa = this.verificarSesion();

    if (sesionExitosa) {
      this.router.navigate(['/tablaProducto']);
    } else {
      this.router.navigate(['/ruta-no-exitosa']);
    }
  }
}
