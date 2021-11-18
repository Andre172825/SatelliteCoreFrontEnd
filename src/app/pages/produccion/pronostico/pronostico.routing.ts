import { SeguimientoCandidatosProComponent } from '@pages/produccion/pronostico/seguimiento-candidatos-pro/seguimiento-candidatos-pro.component';
import { Routes } from "@angular/router";
import { AuthGuard } from "@guard/auth.guard";
import { LogPedidosCreadosComponent } from '@pages/produccion/pronostico/log-pedidos-creados/log-pedidos-creados.component';
import { SeguimientoCandidatoMpComponent } from '@pages/produccion/pronostico/seguimiento-candidato-mp/seguimiento-candidato-mp.component'

export const PronosticoRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children : [
      {
        path: 'monitoreoCandidatos',
        component: SeguimientoCandidatosProComponent,
        data: {
          title: "Monitoreo de Items",
          urls: [
            {title: 'Monitoreo de Items' }
          ]
        }
      },
      {
        path: 'monitoreoCandidatosMP',
        component: SeguimientoCandidatoMpComponent,
        data: {
          title: "Monitoreo de materia prima",
          urls: [
            {title: 'Monitoreo de materia prima' }
          ]
        }
      },
      {
        path: 'pedidoCreadoAutoLog',
        component: LogPedidosCreadosComponent,
        data: {
          title: "Pedidos Creados Log",
          urls: [
            {title: 'Pedidos Creados Log' }
          ]
        }
      }
    ]
  },
]
