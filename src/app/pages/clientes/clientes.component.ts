import { Component, OnInit } from '@angular/core';
import { cCliente } from "src/app/classes/cCliente/cCliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public lst: cCliente[];

  constructor() { 
    this.lst = [];
  }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista() {
    for (let i = 0; i <= 10; i++) {
      var cliente = new cCliente();
      cliente.id = "12345" + i.toString();
      cliente.nom = "cliente " + i.toString();
      cliente.fenac = new Date(new Date().setDate(i));
      cliente.sal = 1000 + i;
      this.lst.push(cliente);
    }
  }

}
