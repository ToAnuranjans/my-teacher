/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    login = {
        userName: '',
        password: '',
    };

    loginForm = new FormGroup({
        userName: new FormControl(this.login.userName, [
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        ]),
        password: new FormControl(this.login.password, Validators.required),
    });

    ngOnInit(): void {

    }

    onSubmit() {
        console.log(this.loginForm.value, this.loginForm);
    }
}


export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}
