import { Component, OnInit, Input } from '@angular/core';
import { cProveedor } from 'src/app/classes/cProveedor/cProveedor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-proveedor-modal',
  templateUrl: './proveedor-modal.component.html',
  styleUrls: ['./proveedor-modal.component.scss']
})

export class ProveedorModalComponent implements OnInit {

  public formProveedor: FormGroup;
  @Input() proveedor: cProveedor;
  public isNew: boolean;
  public isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {
    this.isNew = false;
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    if (this.proveedor === undefined) {
      this.proveedor = new cProveedor();
      this.isNew = true;
    }
    this.formProveedor = this.formBuilder.group({
      idProv: [this.proveedor.idProv, [Validators.required, Validators.maxLength(10)]],
      nom: [this.proveedor.nom, [Validators.required, Validators.maxLength(40)]],
      cupo: [this.proveedor.cupo, Validators.required]
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.formProveedor.invalid) {
      let dataForm = this.formProveedor.value;
      let proveedor: cProveedor = dataForm as cProveedor;

      this.addProveedor(proveedor);

    }

  }

  private addProveedor(proveedor: cProveedor) {
    var diss: [string, any] = ["proveedor", proveedor]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }

  private editProveedor(proveedor: cProveedor) {
    var diss: [string, any] = ["proveedor", proveedor]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }
}
