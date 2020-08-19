import { Component, OnInit } from '@angular/core';
import { cCliente } from "src/app/classes/cCliente/cCliente";
import { BsModalService } from 'ngx-bootstrap/modal';
import { ClienteModalComponent } from 'src/app/modals/cliente-modal/cliente-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public lst: cCliente[];

  public subscriptions: Subscription[];
  constructor(private modalService: BsModalService) {
    this.lst = [];
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista() {
    for (let i = 0; i <= 5; i++) {
      var cliente = new cCliente();
      cliente.id = "12345" + i.toString();
      cliente.nom = "cliente " + i.toString();
      cliente.fenac = new Date(new Date().setDate(i));
      cliente.sal = 1000 + i;
      this.lst.push(cliente);
    }
  }

  public openModal() {
    this.modalService.show(ClienteModalComponent, { keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "cliente") {
          var result: any = reason[1];
          this.lst.push(result as cCliente);
          this.unsubscribe();
        }
      })
    );
  }

  public openEditModal(cliente: cCliente) {
    const initialState = {
      cliente: cliente
    }
    this.modalService.show(ClienteModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "cliente") {
          this.lst.forEach((x, i) => {
            if (x.id === cliente.id) {
              this.lst.splice(i, 1);
            }
          });

          var result: any = reason[1];
          this.lst.push(result as cCliente);
          this.unsubscribe();
        }
      })
    );
  }

  public delete(cliente: cCliente) {
    this.lst.forEach((x, i) => {
      if (x.id === cliente.id) {
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
