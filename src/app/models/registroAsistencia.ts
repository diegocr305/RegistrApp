export class registroAsistencia {
    constructor(
        public id_asistencia: number,
        public fecha: string,
        public hora: string,
        public estado_asistencia: string,
        public id_seccion: number,
        public rut_alumno: string,
        public rut_profesor: string,
    ) {}
}
