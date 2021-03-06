import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from "ngx-toastr";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { ClienteModalComponent } from './modals/cliente-modal/cliente-modal.component';
import { ProveedorModalComponent } from './modals/proveedor-modal/proveedor-modal.component';
import { ProductoModalComponent } from './modals/producto-modal/producto-modal.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProveedorComponent,
    ProductosComponent,
    NavbarComponent,
    FooterComponent,
    ToastComponent,
    ModalComponent,
    ClienteModalComponent,
    ProveedorModalComponent,
    ProductoModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      toastComponent: ToastComponent,
    }),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    ToastComponent, ClienteModalComponent, ProveedorModalComponent, ProductoModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
