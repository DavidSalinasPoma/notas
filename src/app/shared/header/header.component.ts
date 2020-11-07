import { Component, OnInit } from '@angular/core';

// Para las rutas
import { Router } from '@angular/router';

// Servicios
import { LoginService } from './../../services/login.service';

// Intefaces
import { Identify } from './../../models/interfaces';

import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public identify: Identify

  constructor(
    private router: Router,
    private loginServices: LoginService) {

    this.identify = JSON.parse(this.loginServices.getIdentify());
    moment.locale('es');

    this.identify.created_at = moment(this.identify.created_at).format('LL');
    // console.log(this.identify.created_at);


  }

  ngOnInit(): void {

  }

  // Metodos de comportamiento
  /**
   * cerrarSesion
   */
  public cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
