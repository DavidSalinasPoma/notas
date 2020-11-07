import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AppPrincipalComponent } from './app-principal.component';

// Guardianes de rutas
import { AuthGuard } from './../../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppPrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      // Lazy Load
      {
        path: 'usuarios',
        loadChildren: () => import('./../app-principal/app-usuarios/app-usuarios.module').then(m => m.AppUsuariosModule),
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrincipalRoutingModule { }
