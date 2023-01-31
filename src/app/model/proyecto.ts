export class Proyecto {
    id?: number;
    nombreProy: string;
    descripcionProy: string;    
    direccion : string;
    imagenP : string;

    constructor(nombreProy: string, descripcionProy: string, direccion: string, imagenP: string){
        this.nombreProy = nombreProy;
        this.descripcionProy = descripcionProy;
        this.direccion = direccion;
        this.imagenP = imagenP;
    }
    
}

