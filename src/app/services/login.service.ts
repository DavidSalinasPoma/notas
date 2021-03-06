// Peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Servicio url aplicación
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // url
  public url: string;
  constructor(public http: HttpClient) {
    this.url = global.url;
  }
  /**
   * login
   */
  public login(usuario: any, getToken: null): Observable<any> {
    usuario.getToken = null;
    if (getToken != null) {
      usuario.getToken = true;
    }
    const json = JSON.stringify(usuario); // convertimos el objeto a json.
    const params = 'json=' + json; // La varible con la que recibe el parametro. en el API.
    // retornamos respuestas de El APIRESTFUL
    return this.http.post(this.url + 'login', params);
  }

  /**
   * token
   */
  public getToken() {
    return localStorage.getItem('tokenUsuario');
  }
  /**
   * identify
   */
  public getIdentify() {
    return localStorage.getItem('identify');
  }
}
