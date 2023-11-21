import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
titulo:string = "";
precio:number = 0;
descripcion:string="";
categoria:string="";
}
