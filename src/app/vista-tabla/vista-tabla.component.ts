import { Component } from '@angular/core';
import { ProductoService } from '../Service/producto.service';
import { ProductoModelo } from '../Modelos/producto.model';

@Component({
  selector: 'app-vista-tabla',
  templateUrl: './vista-tabla.component.html',
  styleUrls: ['./vista-tabla.component.css']
})
export class VistaTablaComponent {
  productos: ProductoModelo[] = [];
 constructor(productoService:ProductoService){
  this.productos = productoService.productos;
 }
}
