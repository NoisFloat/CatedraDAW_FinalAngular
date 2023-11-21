import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { ProductoModelo } from '../Modelos/producto.model';
import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  exportToExcel(products: ProductoModelo[], fileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(products);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    ProductoService.prototype.productos = [];
    localStorage.removeItem("ProductosArreglo")
    this.saveAsExcelFile(excelBuffer, fileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = URL.createObjectURL(data);
    a.download = `${fileName}.xlsx`;
    a.click();
  }
}
