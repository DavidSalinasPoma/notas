import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Servicio
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor { // implementamos http interceptor

  public tokenizedReq: any;
  // public token: string;
  constructor(
    // private loginServices: LoginService,
    private injector: Injector) {
    // this.token = loginServices.getToken();
  }

  // metodo http intercettor
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenServices = this.injector.get(LoginService);
    // console.log(tokenServices.getToken());
    let headers = new HttpHeaders();

    // definimos nuestras cabezeras
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    // verifica si existe un token
    if (tokenServices.getToken()) {

      this.tokenizedReq = req.clone({

        setHeaders: {
          Authorization: `Bearer ${tokenServices.getToken()}`
        },
        // tslint:disable-next-line: object-literal-shorthand
        headers
      });
    } else {

      this.tokenizedReq = req.clone({

        // setHeaders: {
        //   Authorization: `Bearer ${tokenServices.getToken()}`
        // }
      });
    }
    return next.handle(this.tokenizedReq).pipe(
      catchError(this.manejarError)
    );

  }
  manejarError(error: HttpErrorResponse) {
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error Personalizado');

  }
}
