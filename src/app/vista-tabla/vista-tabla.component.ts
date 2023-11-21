import { Component } from '@angular/core';
import { ProductoService } from '../Service/producto.service';
import { ProductoModelo } from '../Modelos/producto.model';
import { ExcelService } from '../Service/excel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-tabla',
  templateUrl: './vista-tabla.component.html',
  styleUrls: ['./vista-tabla.component.css']
})
export class VistaTablaComponent {
  productos: ProductoModelo[] = [];
 constructor(productoService:ProductoService,private router: Router){
  this.productos = productoService.productos;
 
  
 }
 excelService:ExcelService = new ExcelService();
 exportToExcel(): void {
  this.excelService.exportToExcel(this.productos, 'productos');
  this.router.navigate(['.'])
  
}
reloadPage() {
  location.reload();
}

}
