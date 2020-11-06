import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Servicio
import { LoginService } from './../../services/login.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Metodo constructor
  constructor(
    private loginServices: LoginService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginServices.getToken()) {
      return true;
    } else {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate['/login'];
      return false;
    }
  }
}
