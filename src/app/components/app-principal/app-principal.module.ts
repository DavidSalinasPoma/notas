import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { AppPrincipalRoutingModule } from './app-principal-routing.module';

// Componentes
import { AppPrincipalComponent } from './app-principal.component';
import { AssideComponent } from 'src/app/shared/asside/asside.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

// Angular Material
import { MaterialModule } from './../../material/material.module';



@NgModule({
  declarations: [
    AppPrincipalComponent,
    AssideComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppPrincipalRoutingModule,
    MaterialModule
  ]
})
export class AppPrincipalModule { }
