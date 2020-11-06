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
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrincipalRoutingModule { }
