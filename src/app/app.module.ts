import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular material
import { MaterialModule } from './../app/material/material.module';

// Loader para peticiones
import { NgxSpinnerModule } from 'ngx-spinner';

// Para hacer peticiones y  Interceptores
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Para las animaciones del spirner
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Notifiacion toaster
import { ToastrModule } from 'ngx-toastr';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios de interceptores
import { TokenInterceptorService } from './services/token-interceptor.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// Para recargar la pagina le aumenta un #
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
