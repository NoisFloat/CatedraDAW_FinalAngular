import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { RegistroComponent } from './registro/registro.component';
import { Login_RegistroService } from './Service/LoginYRegistro.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VistaTablaComponent } from './vista-tabla/vista-tabla.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ProductoService } from './Service/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    PageNotFoundComponent,
    VistaTablaComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Login_RegistroService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
