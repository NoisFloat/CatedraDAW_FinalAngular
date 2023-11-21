import { Component } from '@angular/core';
import { ProductoService } from '../Service/producto.service';
import { ProductoModelo } from '../Modelos/producto.model';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
  titulo: string = "";
  precio: number = 0;
  descripcion: string = "";
  categoria: string = "";

  constructor(private productoService: ProductoService) {}

  registrarProducto(): void {
    const productoAgregado = new ProductoModelo();
    productoAgregado.title = this.titulo;
    productoAgregado.price = this.precio;
    productoAgregado.description = this.descripcion;
    productoAgregado.category = this.categoria;

    this.productoService.agregarProducto(productoAgregado);
  }
}
