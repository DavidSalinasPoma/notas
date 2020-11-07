import { Component, OnInit } from '@angular/core';

// Servicios
import { LoginService } from './../../services/login.service';

// Intefaces
import { Identify } from './../../models/interfaces';


@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent implements OnInit {

  public identify: Identify;

  constructor(private loginServices: LoginService) {

    this.identify = JSON.parse(this.loginServices.getIdentify());

  }

  ngOnInit(): void {
  }

}
