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
import { HeaderComponent } from './shared/header/header.component';
import { AssideComponent } from './shared/asside/asside.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppPrincipalComponent } from './components/app-principal/app-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssideComponent,
    FooterComponent,
    LoginComponent,
    AppPrincipalComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
