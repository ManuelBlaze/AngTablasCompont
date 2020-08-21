import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'proveedores', component: ProveedorComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
