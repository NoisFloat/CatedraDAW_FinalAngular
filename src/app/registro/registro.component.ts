// registro.component.ts

import { Component } from '@angular/core';
import { PersonaModels } from '../Modelos/persona.model';
import { Login_RegistroService } from '../Service/LoginYRegistro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = "";
  password: string = "";

  constructor(private serviciosPersona: Login_RegistroService) {}

  registrarPersona(): void {
    const personaAgregada = new PersonaModels();
    personaAgregada.nombre = this.nombre;
    personaAgregada.password = this.password;

    this.serviciosPersona.agregarPersona(personaAgregada);
  }
}
