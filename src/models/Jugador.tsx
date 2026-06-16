export class Jugador{
    numero: number;
    nombreCompleto: string;
    equipo: string;
    posicion: string;
    codigoPosicion: string;

    constructor(numero: number, nombreCompleto: string, equipo: string, posicion: string, codigoPosicion: string){
        this.numero = numero;
        this.nombreCompleto = nombreCompleto;
        this.equipo = equipo;
        this.posicion = posicion;
        this.codigoPosicion = codigoPosicion;
    }
}

