import { Routes } from "@angular/router";
import { AuthGuard } from "@guard/auth.guard";
import { PedidosComponent } from '@pages/dashboard/comercial/pedidos/pedidos.component';
import { VentasComponent } from '@pages/dashboard/comercial/ventas/ventas.component';
import { ExportacionComponent } from '@pages/dashboard/comercial/exportacion/exportacion.component';
import { PedidoArimaComponent } from '@pages/dashboard/produccion/pedido-arima/pedido-arima.component';
import { InretailComponent } from '@pages/dashboard/comercial/inretail/inretail.component'
import { RentabilidadComponent } from '@pages/dashboard/comercial/rentabilidad/rentabilidad.component'

export const DashboardRoutes: Routes = [
    {
        path: 'comercial',
        canActivate: [AuthGuard],
        children : [
            {
                path: 'pedidos',
                component: PedidosComponent ,
                data: {
                title: "Dashboard comercial pedidos",
                urls: [
                        { title: 'Dashboard comercial pedidos' }
                    ]
                }
            },
            {
                path: 'ventas',
                component: VentasComponent ,
                data: {
                title: "Dashboard comercial ventas",
                urls: [
                        { title: 'Dashboard comercial ventas' }
                    ]
                }
            },
            {
                path: 'exportacion',
                component: ExportacionComponent ,
                data: {
                title: "Dashboard comercial exportación",
                urls: [
                        { title: 'Dashboard comercial exportación' }
                    ]
                }
            },
            {
                path: 'ventasInretail',
                component: InretailComponent ,
                data: {
                title: "Dashboard ventas inretail",
                urls: [
                        { title: 'Dashboard ventas inretail' }
                    ]
                }
            },
            {
                path: 'rentabilidad',
                component: RentabilidadComponent ,
                data: {
                title: "Dashboard rentabilidad",
                urls: [
                        { title: 'Dashboard rentabilidad' }
                    ]
                }
            }
        ]
    },
    {
        path: 'produccion',
        canActivate: [AuthGuard],
        children : [
            {
                path: 'pedidosArima',
                component: PedidoArimaComponent ,
                data: {
                title: "Dashboard pedidos arima",
                urls: [
                        { title: 'Dashboard pedidos arima' }
                    ]
                }
            }
        ]
    }
]