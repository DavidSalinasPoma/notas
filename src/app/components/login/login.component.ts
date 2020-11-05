import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

// Para las rutas
import { Router } from '@angular/router';

// servicios
import { LoginService } from './../../services/login.service';

// notificaciones
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

// Formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Rebote basado en tiempo de entrada
import { debounceTime } from 'rxjs/operators';

// Modelos
import { Login } from './../../models/login';

// Mensajes de error
import { MyErrorStateMatcher } from './../../utils/matcherError';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // para formulario password
  public hide: any = true;
  // Formulario reactivo
  public formulario: FormGroup;
  // modelos
  public login: Login;

  // Mensaje de error forms reactivos
  public matcher: MyErrorStateMatcher;

  // Metodo Constructor
  constructor(
    private loginServices: LoginService,
    private toasterServices: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.formularios();
    this.login = new Login('', '');
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit(): void {
    this.recodarDatosFormulario();
  }

  /**
   * formulario
   */
  public formularios() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&' * +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', Validators.required],
      recordar: ['']
    });

    // Reaccionar reactivamente a cambios del formulario
    // this.formulario.valueChanges
    //   .pipe(
    //     debounceTime(500) // Retrasa los cambios en medio segundo.
    //   )
    //   .subscribe(
    //     response => {
    //       console.log(response);

    //     }
    //   );
  }

  // Validaciones de formulario
  get email() {
    return this.formulario.get('email');
  }
  get password() {
    return this.formulario.get('password');
  }
  get recordar() {
    return this.formulario.get('recordar');
  }

  /**
   * onSubmit
   */
  public onSubmit(event: Event) {
    event.preventDefault(); // Para no recargar la pagina del formulario
    // this.formulario.invalid  //formulario invalido

    // Si el formulario es valido this.formulario.valid
    if (this.formulario.valid) {

      const value = this.formulario.value
      // console.log(this.formulario.value.recordar);

      this.login.email = value.email;
      this.login.password = value.password;
      // console.log(this.login);
      // peticion al servidor
      this.loginServices.login(this.login, null).subscribe(
        resp => {
          // console.log(resp); Cuando es el login incorrecto
          if (resp.status === 'error') {
            this.toasterServices.error(resp.message);
            // console.log(resp.message);
          } else { // login correcto
            // Se obtiene el token para sacar los datos del usuario
            this.loginServices.login(this.login, resp).subscribe(
              respToken => {
                // console.log(respToken);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: '¡Login correcto!',
                  text: `Bienvenid@ ${respToken.nombres} ${respToken.apellidos} `,
                  showConfirmButton: false,
                  timer: 3000
                })

                // Guardando los datos en el localStorage
                // token
                localStorage.setItem('tokenUsuario', resp);
                localStorage.setItem('identify', JSON.stringify(respToken));

                // Recordar contraseña con cookies
                if (this.formulario.value.recordar) {
                  document.cookie = "email=" + value.email;
                  document.cookie = "password=" + value.password;
                  // alert(document.cookie)
                } else {
                  // Eliminar cookies
                  this.destroyCookies('email');
                  this.destroyCookies('password');
                }

                setTimeout(() => {
                  // this.router.navigate(['http://jacbolivia2000.com']);
                  console.log('Hola Mundo');

                }, 3000);

              }
            );

          }
        },
        err => {
          // console.log(err);
          this.toasterServices.error('Revise la conexion a internet', 'No hay conexion con el servidor');
        }
      );
    } else {
      //  Activar todos los errores
      this.formulario.markAllAsTouched();
    }

  }

  /**
   * RecodarDatosFormulario
   */
  public recodarDatosFormulario() {
    // Recupera datos en el formulario Login
    const email = this.cookieLogin('email');
    const password = this.cookieLogin('password');
    // Validar que no llegue datos vacios
    if (email !== false && password !== false) {
      this.formulario.reset({
        email: this.cookieLogin('email'),
        password: this.cookieLogin('password'),
        recordar: true
      });
    }

  }

  /**
   * cookieLogin
   */
  public cookieLogin(nombre: string) {
    let micookie;
    const datos = document.cookie.split(";");

    if (datos[0] !== '') {

      // tslint:disable-next-line: forin
      for (const i in datos) {
        const busca = datos[i].search(nombre);
        if (busca > -1) {
          micookie = datos[i]
        }
      }
      const igual = micookie.indexOf("=");
      const valor = micookie.substring(igual + 1);
      // console.log(valor);
      return valor;

    } else {

      return false;

    }
  }

  /**
   * destroyCookies
   */
  public destroyCookies(nombre: string) {
    const expiry = new Date();
    expiry.setTime(expiry.getTime() - 3600);
    document.cookie = nombre + "=; expires=" + expiry.toUTCString() + "; path=/"
    // console.log(document.cookie);
  }

}

