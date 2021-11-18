import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PronosticoRoutes } from './pronostico.routing';
import { SeguimientoCandidatosProComponent } from './seguimiento-candidatos-pro/seguimiento-candidatos-pro.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogPedidosCreadosComponent } from './log-pedidos-creados/log-pedidos-creados.component';
import { NotifierModule } from 'angular-notifier';
import { SeguimientoCandidatoMpComponent } from './seguimiento-candidato-mp/seguimiento-candidato-mp.component';

@NgModule({
  declarations: [
    SeguimientoCandidatosProComponent,
    LogPedidosCreadosComponent,
    SeguimientoCandidatoMpComponent
  ],
  imports: [
    RouterModule.forChild(PronosticoRoutes),
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    NgbModule,
    NotifierModule,
    ReactiveFormsModule,
  ]
})
export class PronosticoModule { }
