import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Ruta principal para el login y la app
  // Definir la ruta por defecto
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // Lazy Load
  {
    path: 'inicio',
    loadChildren: () => import('./../app/components/app-principal/app-principal.module').then(m => m.AppPrincipalModule)
  },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }, // para mostrar la pagina por defecto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
