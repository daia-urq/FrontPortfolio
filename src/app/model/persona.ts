export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    acercaDe: string;
    titulo1 : string;
    titulo2 : string;
    img: string;

    constructor(nombre: string, apellido: string, acercaDe: string, titulo1: string, titulo2 : string,  img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.titulo1 = titulo1;
        this.titulo2 = titulo2;
        this.img = img;
    }

}

