import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, AddressType } from '../models/address.model';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  productForm: FormGroup;
  addressType = AddressType;
  private product: Product = new Product();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      showAddresses: [this.product.showAddresses],
      addresses: this.fb.array(this.product.addresses?.length ?
        this.product.addresses.map((address: Address) => this.buildAddress(address))
        : [this.buildAddress()])
    });

    this.clearAddress();
  }

  buildAddress(address?: Address): FormGroup {
    return this.fb.group({
      addressType: [address?.type],
      locality: [address?.locality],
      city: [address?.city],
      pincode: [address?.pincode],
      state: [address?.state]
    });
  }

  get addresses(): FormArray {
    return this.productForm.get('addresses') as FormArray;
  }

  clearAddress() {
    this.productForm.get('showAddresses').valueChanges.subscribe(x => {
      this.addresses.clear();
      if (x) {
        this.addresses.push(this.buildAddress());
      }
    });
  }

  newAddress() {
    this.addresses.push(this.buildAddress());
  }

  remove(event: any, index: number) {
    this.addresses.removeAt(index);
  }

  save() {
    console.log('Product information', JSON.stringify(this.productForm.value));
  }
}
