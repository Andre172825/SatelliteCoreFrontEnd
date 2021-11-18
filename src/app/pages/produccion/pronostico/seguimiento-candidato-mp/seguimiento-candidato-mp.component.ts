import { Component } from '@angular/core';
import { PronosticoService } from '@data/services/backEnd/pages/pronostico.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seguimiento-candidato-mp',
  templateUrl: './seguimiento-candidato-mp.component.html'
})
export class SeguimientoCandidatoMpComponent {

  listaCandidatos: any[]
  dataCompleta: any[]
  listaCompletaOCPendientes: any[]
  listaDettalleOC: any[]
  itemModal: string = ""
  descripcionModal: string = ""

  messagerNgxTable = {
    'emptyMessage': 'No se ha encontrado candidatos para este filtro',
    'totalMessage': 'Candidatos'
  }

  constructor(private _pronosticoService: PronosticoService, private _modalService: NgbModal) { 
    this.obtenerListaCandidatosMP('MPAGAR1')

  }

  obtenerListaCandidatosMP(regla: string){
    this.listaCandidatos = []
    this.dataCompleta = []
    this._pronosticoService.ListSeguimientoCandidatosMateriaPrima(regla).subscribe(
      (resp:any) => {
        this.listaCandidatos = resp['seguimientoCandidatosMPA']
        this.dataCompleta = resp['seguimientoCandidatosMPA']
        this.listaCompletaOCPendientes = resp['ordenComprasPendientes']
      }
    )
  }

  cambioRegla(regla){
    this.obtenerListaCandidatosMP(regla);
  }

  ActualizarLista(regla){
    this.obtenerListaCandidatosMP(regla);
  }

  filtroCandidato(cadena: string){
    this.listaCandidatos = []
    if(cadena == '')
      this.listaCandidatos = this.dataCompleta
    else 
      this.listaCandidatos = this.dataCompleta.filter( x => x['item'].toLowerCase().indexOf(cadena.toLowerCase()) !== -1 || x['descripcion'].toLowerCase().indexOf(cadena.toLowerCase()) !== -1)
  }
  
  getPendienteOrdenComprar(item: string): boolean{
    return this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['pendienteOC'] > 0).length > 0
  }

  getTransitoCC(item: string): boolean{
    return this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['almacen'] == 'CONTRCALID').length > 0
  }

  getTransitoAduana(item: string): boolean{
    return this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['almacen'] == 'TRANSITO' && x['cantidadRecibida'] > 0).length > 0
  }

  abrirModalTransito(modal: NgbModal, item, filtro, descripcion){
    
    this.listaDettalleOC = []
    this.itemModal = item
    this.descripcionModal = descripcion

    if (filtro == 'pendienteOC')
      this.listaDettalleOC = this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['pendienteOC'] > 0)
    if (filtro == 'transporteCC')
      this.listaDettalleOC = this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['almacen'] == 'CONTRCALID')
    if(filtro == 'aduanas')
      this.listaDettalleOC = this.listaCompletaOCPendientes.filter(x => x['item'] == item && x['almacen'] == 'TRANSITO')

    if (filtro == 'pendienteOC')
      this._modalService.open(modal, {
        centered: true,
        backdrop: 'static',
        size: 'xl',
        scrollable: true
      });
    else 
      this._modalService.open(modal, {
        centered: true,
        backdrop: 'static',
        size: 'lg',
        scrollable: false
      });
  }

}
