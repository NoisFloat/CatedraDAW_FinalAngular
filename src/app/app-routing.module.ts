import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { VistaTablaComponent } from './vista-tabla/vista-tabla.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'insertarProducto', component:FormularioProductoComponent},
  { path: 'tablaProducto', component:VistaTablaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
