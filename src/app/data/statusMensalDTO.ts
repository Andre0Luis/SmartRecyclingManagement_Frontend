export interface IStatusMensalDTO {
    plastico?: number;
    papel?: number;
    vidro?: number;
    metal?: number;
    organico?: number;
    naoReciclavel?: number;
    gastoMensal?: number;
}

export class StatusMensalDTO implements IStatusMensalDTO {
    constructor(
        public plastico?: number,
        public papel?: number,
        public vidro?: number,
        public metal?: number,
        public organico?: number,
        public naoReciclavel?: number,
        public gastoMensal?: number
    ) { }
}