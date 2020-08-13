import { Component, OnInit } from '@angular/core';
import { cProductos } from "src/app/classes/cProductos/cProductos";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public prod: cProductos[];

  constructor() { 
    this.prod = [];
  }

  ngOnInit(): void {
    this.llenarProductos();
  }

  private llenarProductos() {
    for (let i = 1; i <= 7; i++) {
      var producto = new cProductos();
      producto.cod = `${i * 1000}100`;
      producto.descr = `Producto ${i}`
      producto.val = 100000 + (i * 2000);
      this.prod.push(producto)
    }
  }
}
