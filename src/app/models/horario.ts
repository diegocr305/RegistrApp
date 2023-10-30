export class horario {
    constructor(
        public id_horario: number,
        public dia_semana: string,
        public hora_inicio: string,
        public hora_fin: string,
        public id_sala: number,
        public id_asignatura: number,
    ) {}
}
