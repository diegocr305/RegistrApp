export class Alumno {
    constructor(
        public Rut: string,
        public Nombre: string,
        public edad:number | undefined,
        public correo: string,
        public password: string,
        public telefono: number,
        public id_carrera: number,
    ) {}
}