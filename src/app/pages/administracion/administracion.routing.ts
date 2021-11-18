import { Routes } from "@angular/router";
import { AuthGuard } from "@guard/auth.guard";
import { ListarUsuarioComponent } from "@pages/administracion/usuario/listar-usuario/listar-usuario.component";

export const AdministracionRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children : [
      {
        path: 'Usuarios',
        component: ListarUsuarioComponent,
        data: {
          title: "Mantenimiento de usuario",
          urls: [
            {title: 'Mantenimiento usuario' }
          ]
        }
      },
    ]
  },
]
