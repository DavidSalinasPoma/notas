// Peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Servicio url aplicación
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = global.url;
  }

  /**
   * indexUsuarios
   * Lista  de todos los usuarios de la base de datos.
   */
  public indexUsuarios(): Observable<any> {

    // retornamos respuestas de El APIRESTFUL
    return this.http.get(this.url + 'user');

  }

}
