import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { ReactiveLoginPage } from './reactive-login/reactive-login.page';
import { TemplateLoginPage } from './template-login/template-login.page';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'template-login',
        component: TemplateLoginPage
    },
    {
        path: 'reactive-login',
        component: ReactiveLoginPage
    },
    {
        path: '',
        redirectTo: 'reactive-login',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [LoginPage, TemplateLoginPage, ReactiveLoginPage],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        RouterModule.forChild(routes),
    ],

})
export class AuthModule {

}
