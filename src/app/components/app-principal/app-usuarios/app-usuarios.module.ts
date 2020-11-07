import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUsuariosRoutingModule } from './app-usuarios-routing.module';

// Angular material
import { MaterialModule } from './../../../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppUsuariosRoutingModule,
    MaterialModule
  ]
})
export class AppUsuariosModule { }
