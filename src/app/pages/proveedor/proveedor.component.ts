import { Component, OnInit } from '@angular/core';
import { cProveedor } from "src/app/classes/cProveedor/cProveedor";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  public proveedores: cProveedor[];

  constructor() { 
    this.proveedores = [];
  }

  ngOnInit(): void {
    this.iniciales ();
  }

  private iniciales () {
    for (let i = 1; i <= 10; i++) {
        let prov = new cProveedor();
        prov.idProv = `105${i*2}`
        prov.nom = `Proveedor ${i}`;
        prov.cupo = 32 + i;
        this.proveedores.push(prov);
    }
  }

}
