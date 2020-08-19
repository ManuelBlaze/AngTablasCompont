import { Component, OnInit, Input } from '@angular/core';
import { cCliente } from 'src/app/classes/cCliente/cCliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cliente-modal',
  templateUrl: './cliente-modal.component.html',
  styleUrls: ['./cliente-modal.component.scss']
})

export class ClienteModalComponent implements OnInit {

  public formCliente: FormGroup;
  @Input() cliente: cCliente;
  public isNew: boolean;
  public isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {
    this.isNew = false;
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    if (this.cliente === undefined) {
      this.cliente = new cCliente();
      this.isNew = true;
    }
    this.formCliente = this.formBuilder.group({
      id: [this.cliente.id, [Validators.required, Validators.maxLength(10)]],
      nom: [this.cliente.nom, [Validators.required, Validators.maxLength(40)]],
      sal: [this.cliente.sal, Validators.required]
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.formCliente.invalid) {
      let dataForm = this.formCliente.value;
      let cliente: cCliente = dataForm as cCliente;

      if (this.isNew) {
        cliente.fenac = new Date();
        this.addCliente(cliente);
      }
      else {
        cliente.fenac = this.cliente.fenac;
        this.editCliente(cliente);
      }
    }
  }

  private addCliente(cliente: cCliente) {
    var diss: [string, any] = ["cliente", cliente]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }

  private editCliente(cliente: cCliente) {
    var diss: [string, any] = ["cliente", cliente]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }
}
