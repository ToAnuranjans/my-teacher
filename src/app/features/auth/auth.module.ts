import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register/register.page';



@NgModule({
  declarations:[RegisterPage],
  imports: [
    IonicModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
