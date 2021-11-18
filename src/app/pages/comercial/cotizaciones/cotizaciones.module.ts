import { FeatherModule } from 'angular-feather';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CotizacionesRoutes } from './cotizaciones.routing';

import { ComponenteModule } from '@shared/components/componente.module';
import { GeneracionFormatosComponent } from '@pages/comercial/cotizaciones/generacionformatos/generacionformatos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    GeneracionFormatosComponent
  ],
  imports: [
    RouterModule.forChild(CotizacionesRoutes),
    CommonModule,
    FeatherModule,
    ComponenteModule,
    ReactiveFormsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    FormsModule,
  ],
  providers:[
    DatePipe
  ],
  exports: [
    GeneracionFormatosComponent
  ]
})

export class CotizacionesModule { }
