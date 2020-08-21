import { Component, OnInit } from '@angular/core';
import { cProductos } from "src/app/classes/cProductos/cProductos";
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductoModalComponent } from 'src/app/modals/producto-modal/producto-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public lst: cProductos[];

  public subscriptions: Subscription[];
  constructor(private modalService: BsModalService) {
    this.lst = [];
    this.subscriptions = [];
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
      this.lst.push(producto)
    }
  }

  public openModal() {
    this.modalService.show(ProductoModalComponent, { keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "producto") {
          var result: any = reason[1];
          this.lst.push(result as cProductos);
          this.unsubscribe();
        }
      })
    );
  }

  public openEditModal(producto: cProductos) {
    const initialState = {
      producto: producto
    }
    this.modalService.show(ProductoModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "producto") {
          this.lst.forEach((x, i) => {
            if (x.cod === producto.cod) {
              this.lst.splice(i, 1);
            }
          });

          var result: any = reason[1];
          this.lst.push(result as cProductos);
          this.unsubscribe();
        }
      })
    );
  }

  public delete(producto: cProductos) {
    this.lst.forEach((x, i) => {
      if (x.cod === producto.cod) {
        this.lst.splice(i, 1);
      }
    });
  }

  public unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
