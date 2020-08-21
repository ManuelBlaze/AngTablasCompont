import { Component, OnInit, Input } from '@angular/core';
import { cProductos } from "../../classes/cProductos/cProductos";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.scss']
})
export class ProductoModalComponent implements OnInit {

  public formProducto: FormGroup;
  @Input() producto: cProductos;
  public isNew: boolean;
  public isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {
    this.isNew = false;
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    if (this.producto === undefined) {
      this.producto = new cProductos();
      this.isNew = true;
    }
    this.formProducto = this.formBuilder.group({
      cod: [this.producto.cod, [Validators.required, Validators.maxLength(10)]],
      descr: [this.producto.descr, [Validators.required, Validators.maxLength(80)]],
      val: [this.producto.val, Validators.required]
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.formProducto.invalid) {
      let dataForm = this.formProducto.value;
      let producto: cProductos = dataForm as cProductos;

      this.addProducto(producto);
    }
  }

  private addProducto(producto: cProductos) {
    var diss: [string, any] = ["producto", producto]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }

  private editProducto(producto: cProductos) {
    var diss: [string, any] = ["producto", producto]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
  }

}