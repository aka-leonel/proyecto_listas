export class Actividad {
    descripcion: string
    compleatado: boolean

    constructor(titulo: string){
        this.descripcion = titulo
        this.compleatado = false
    }
}