import { ProductoModelo } from "../Modelos/producto.model";
export class ProductoService{
    productos : ProductoModelo[] = [];
    constructor() {
        this.inicializadorDeArreglo();
    }
    agregarProducto(producto: ProductoModelo){
        this.productos.push(producto);
        localStorage.setItem("ProductosArreglo", JSON.stringify(this.productos));


    }
    /*Basicamente el codigo mas importante me regresa los datos que encuentre en el local storage */
inicializadorDeArreglo() {
    if (localStorage.getItem("ProductosArreglo") !== null) {
        let recuperado = localStorage.getItem("ProductosArreglo") || "";
        
        // Parseamos la cadena JSON y asignamos el resultado a alguna variable o propiedad
        const personasArreglo: ProductoModelo[] = JSON.parse(recuperado);

        this.productos = personasArreglo;
        console.log(personasArreglo);
    }
}
}



