import { PronosticoService } from '@data/services/backEnd/pages/pronostico.service';
import { Component, OnInit } from '@angular/core';
import { SeguimientoCandidato } from '@data/interface/Response/SeguimientoCandidatos.interdace'
import { PedidoEnTransito } from '@data/interface/Response/PedidoEnTransito.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seguimiento-candidatos-pro',
  templateUrl: './seguimiento-candidatos-pro.component.html',
  styleUrls: ['./seguimiento-candidatos-pro.component.css']
})
export class SeguimientoCandidatosProComponent implements OnInit {

  private  _periodoActual =  new Date().toISOString().substring(0,7)
  dataCompleta: SeguimientoCandidato[]
  listaCandidatos: SeguimientoCandidato[]
  pedidosItemTransito : PedidoEnTransito[]
  formularioFiltro: FormGroup
  alertasPorPagina = 10
  messagerNgxTable = {
    'emptyMessage': 'No se ha encontrado candidatos para este filtro',
    'totalMessage': 'Candidatos'
  }

  constructor(private _pronosticoService: PronosticoService, private _modalService: NgbModal, private _fb: FormBuilder) {
    this.crearFormulario()
  }

  ngOnInit(): void {
    this.ObtenerListaCandidatos(0);
  }

  ObtenerListaCandidatos (filtro: number){

    if(this.formularioFiltro.valid)
    {

      this.desactivarCheckbox(filtro)

      const body = {
        'periodo': this.formularioFiltro.get('periodo').value.replace('-', ''),
        'primerFiltro': this.formularioFiltro.get('primerFiltro').value,
        'segundoFiltro': this.formularioFiltro.get('segundoFiltro').value,
        'tercerFiltro': this.formularioFiltro.get('tercerFiltro').value
      }
  
      this.listaCandidatos = []
  
      if(body['primerFiltro'] == true || body['segundoFiltro'] == true || body['tercerFiltro'] == true)
        body.periodo = this._periodoActual
  
      this._pronosticoService.ListSeguimientoCandidatos(body).subscribe(
        resp => {
          this.listaCandidatos =  resp
          this.dataCompleta = resp
        }
      )
    }
    
  }


  desactivarCheckbox(filtro: number){

    if (filtro == 0){
      this.formularioFiltro.patchValue({
        primerFiltro: false,
        segundoFiltro: false,
        tercerFiltro: false
      })
      return
    }
    if (filtro == 1){
      this.formularioFiltro.patchValue({
        periodo: this._periodoActual,
        segundoFiltro: false,
        tercerFiltro: false
      })
      return
    }

    if (filtro == 2){
      this.formularioFiltro.patchValue({
        periodo: this._periodoActual,
        primerFiltro: false,
        tercerFiltro: false
      })
      return
    }

    if(filtro == 3){
      this.formularioFiltro.patchValue({
        periodo: this._periodoActual,
        primerFiltro: false,
        segundoFiltro: false,
      })
    }



  }

  crearFormulario(){
    this.formularioFiltro =  this._fb.group({
      periodo: ['', Validators.required],
      primerFiltro: [false],
      segundoFiltro: [false],
      tercerFiltro: [false]
    })

    this.formularioFiltro.reset({
      periodo: this._periodoActual,
      primerFiltro: false,
      segundoFiltro: false,
      tercerFiltro: false
    })

  }

  actualizarLista(){
    this.ObtenerListaCandidatos(0)
  }

  cambioPaginado (event){
    this.alertasPorPagina = event
  }

  filtroCandidato(event){
    this.listaCandidatos = this.filter(event)
  }

  filter(v: string) {
    return this.dataCompleta.filter(x => x.codSut?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
      x.item?.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.descripcion?.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  abrirModalTransito(modal: NgbModal, detalle){
    this.pedidosItemTransito = []
    this.pedidosItemTransito = detalle
    this._modalService.open(modal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
      scrollable: true
    });
  }


}
