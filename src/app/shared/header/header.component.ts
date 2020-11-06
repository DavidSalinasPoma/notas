import { Component, OnInit } from '@angular/core';

// Para las rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

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
