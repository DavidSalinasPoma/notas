import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPrincipalComponent } from './app-principal.component';

// Componentes
import { AppPrincipalModule } from './app-principal.module';


const routes: Routes = [
  {
    path: '',
    component: AppPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrincipalRoutingModule { }
