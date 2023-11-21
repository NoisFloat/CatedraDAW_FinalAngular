import { Component } from '@angular/core';
import { Login_RegistroService } from '../Service/LoginYRegistro.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = "";
  password: string = "";

  constructor(private serviciosPersona: Login_RegistroService) {}

  verificarSesion(): boolean {
    // Assuming verificarLogin returns a boolean indicating the success of the login
    return this.serviciosPersona.verificarLogin(this.nombre, this.password);
  }
}