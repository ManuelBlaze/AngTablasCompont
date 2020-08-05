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
    for (let i = 0; i < 10; i++) {
      var producto = new cProductos();
      producto.cod = `100${i}`;
      producto.descr = `Producto ${i}`
      producto.val = 50 + i;
      this.prod.push(producto)
    }
  }
}
