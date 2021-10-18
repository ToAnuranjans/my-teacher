import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl: './reactive-login.page.html',
    styleUrls: ['./reactive-login.page.scss']
})
export class ReactiveLoginPage implements OnInit {
    customerForm: FormGroup;
    customer: Customer = new Customer('Anuranjan', 'Srivastav', 'as@as.com', true);

    constructor() { }

    ngOnInit(): void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(this.customer.firstName),
            lastName: new FormControl(this.customer.lastName),
            email: new FormControl(this.customer.email),
            sendCatalog: new FormControl(this.customer.sendCatalog),
        });
    }

    save() {
        console.log('Customer form data saved ', this.customerForm.value);
    }
}
