export class Asignatura {
    constructor(
        public id_asignatura: number,
        public nombre_asignatura: string,
        public codigo_asignatura: string,
        public rut_alumno: string,
        public rut_profesor: string,
        public telefono: number,
        public id_carrera: number,
    ) {}
}
