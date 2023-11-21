import { PersonaModels } from '../Modelos/persona.model';

export class Login_RegistroService {
    personas: PersonaModels[] = [];

    constructor() {
        this.inicializadorDeArreglo();
    }
    /*Basicamente el codigo mas importante me regresa los datos que encuentre en el local storage */
    inicializadorDeArreglo() {
        if (localStorage.getItem("PersonasArreglo") !== null) {
            let recuperado = localStorage.getItem("PersonasArreglo") || "";
            
            // Parseamos la cadena JSON y asignamos el resultado a alguna variable o propiedad
            const personasArreglo: PersonaModels[] = JSON.parse(recuperado);
    
            this.personas = personasArreglo;
            console.log(personasArreglo);
        }
    }
    
    /*Basicamente el codigo mas importante me regresa los datos que encuentre en el local storage */

    agregarPersona(persona: PersonaModels) {
        this.personas.push(persona);
        // Use localStorage without Window.prototype
        localStorage.setItem("PersonasArreglo", JSON.stringify(this.personas));
    }

    eliminarPersona(IdNumero: number) {
        // Use splice to remove an element from the array
        this.personas.splice(IdNumero, 1);
        // Update localStorage after removing the element
        localStorage.setItem("PersonasArreglo", JSON.stringify(this.personas));
    }
    verificarLogin(nombreL: string, passwordL: string): boolean {
        // Utilizamos find para buscar una coincidencia en el arreglo
        const personaEncontrada = this.personas.find(e => e.nombre == nombreL && e.password == passwordL);
    
        // Devolvemos true si se encuentra una coincidencia, de lo contrario, false
        return personaEncontrada !== undefined;
    }
    
}
