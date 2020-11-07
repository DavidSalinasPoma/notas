import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AppUsuariosComponent } from './app-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AppUsuariosComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsuariosRoutingModule { }
