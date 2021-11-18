import { PedidoEnTransito } from "./PedidoEnTransito.interface";

export interface SeguimientoCandidato {
  candidato : number,
  codSut: string,
  item : string,
  descripcion : string,
  coeficienteVariacion : number,
  pronostico : number,
  limiteSuperior : number,
  puntoControl: number,
  stockMax : number,
  stockActual : number,
  stockComprometido : number,
  stockDisponible : number,
  stockEnTransito : number,
  pedidosTransito: PedidoEnTransito[]
}
