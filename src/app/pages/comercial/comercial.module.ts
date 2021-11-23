import { FeatherModule } from 'angular-feather';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercialRoutes } from './comercial.routing';

import { ComponenteModule } from '@shared/components/componente.module';
import { GeneracionFormatosComponent } from '@pages/comercial/cotizaciones/generacionformatos/generacionformatos.component';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    GeneracionFormatosComponent
  ],
  imports: [
    RouterModule.forChild(ComercialRoutes),
    CommonModule,
    FeatherModule,
    ComponenteModule,
    NgbModule,
    FormsModule,
  ],
  exports: [
    GeneracionFormatosComponent
  ]
})

export class ComercialModule { }
