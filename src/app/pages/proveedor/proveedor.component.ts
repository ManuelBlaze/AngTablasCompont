import { Component, OnInit } from '@angular/core';
import { cProveedor } from "src/app/classes/cProveedor/cProveedor";
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProveedorModalComponent } from 'src/app/modals/proveedor-modal/proveedor-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  public lst: cProveedor[];

  public subscriptions: Subscription[];
  constructor(private modalService: BsModalService) {
    this.lst = [];
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.iniciales ();
  }

  private iniciales () {
    for (let i = 1; i <= 10; i++) {
        let proveedor = new cProveedor();
        proveedor.idProv = `105${i*2}`
        proveedor.nom = `Proveedor ${i}`;
        proveedor.cupo = 32 + i;
        this.lst.push(proveedor);
    }
  }

  public openModal() {
    this.modalService.show(ProveedorModalComponent, { keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "proveedor") {
          var result: any = reason[1];
          this.lst.push(result as cProveedor);
          this.unsubscribe();
        }
      })
    );
  }

  public openEditModal(proveedor: cProveedor) {
    console.log(proveedor)
    const initialState = {
      proveedor: proveedor
    }
    this.modalService.show(ProveedorModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "proveedor") {
          this.lst.forEach((x, i) => {
            if (x.idProv === proveedor.idProv) {
              this.lst.splice(i, 1);
            }
          });

          var result: any = reason[1];
          this.lst.push(result as cProveedor);
          this.unsubscribe();
        }
      })
    );
  }

  public delete(proveedor: cProveedor) {
    this.lst.forEach((x, i) => {
      if (x.idProv === proveedor.idProv) {
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
