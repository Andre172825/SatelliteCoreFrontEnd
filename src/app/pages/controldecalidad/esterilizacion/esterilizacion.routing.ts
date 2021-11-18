import { CertificadoComponent } from '@pages/controldecalidad/esterilizacion/certificado/certificado.component';
import { Routes } from "@angular/router";
import { AuthGuard } from "@guard/auth.guard";

export const EsterilizacionRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children : [
      {
        path: 'certificado',
        component: CertificadoComponent,
        data: {
          title: "Certificado de Esterilización",
          urls: [
            {title: 'Certificado de Esterilización' }
          ]
        }
      },
    ]
  },
]
