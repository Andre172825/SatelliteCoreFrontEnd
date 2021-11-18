import { FullComponent } from '@layout/full/full.component';
import { Routes } from '@angular/router';
import { BlankComponent } from '@layout/blank/blank.component';


// Los PATH tienen que con Mayuscula
export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      {
        path:'Home',
        loadChildren: () => import('@pages/home/starter.module').then(m => m.StarterModule)
      },
      {
        path:'Cuenta',
        loadChildren: () => import('@pages/cuenta/cuenta.module').then( m => m.CuentaModule)
      },
      {
        path:'Administracion',
        loadChildren:() => import('@pages/administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path:'Pronostico',
        loadChildren:() => import('@pages/produccion/pronostico/pronostico.module').then(m => m.PronosticoModule)
      },
      {
        path:'Esterilizacion',
        loadChildren:() => import('@pages/controldecalidad/esterilizacion/esterilizacion.module').then(m => m.EsterilizacionModule)
      },
      {
        path:'Dashboard',
        loadChildren:() => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'Cotizaciones',
        loadChildren:() => import('@pages/comercial/cotizaciones/cotizaciones.module').then(m => m.CotizacionesModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path:'authentication',
        loadChildren: () => import('@auth/auth.module').then( m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];

