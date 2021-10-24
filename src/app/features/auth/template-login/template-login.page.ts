import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './template-login.page.html',
    styleUrls: ['./template-login.page.scss']
})
export class TemplateLoginPage implements OnInit {

    customer = {
        firstName: ''
    };


    constructor() { }



    ngOnInit(): void {
        console.log('ngOnInit');
    }

    save(form: NgForm) {
        console.log('save', form);

    }
}
