import { Routes } from "@angular/router";
import { AuthGuard } from "@guard/auth.guard";
import { GeneracionFormatosComponent } from './generacionformatos/generacionformatos.component';

export const CotizacionesRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children : [      
      {
        path: 'generacionformatos',
        component: GeneracionFormatosComponent,
        data: {
          title: "Generación de Formatos de cotización",
          urls: [
            {title: 'Generación de Formatos de cotización' }
          ]
        }
      },
    ]
  },
]
