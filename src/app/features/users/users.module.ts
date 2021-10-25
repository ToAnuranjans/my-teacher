import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserListPage } from './user-list/user-list.page';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPage } from './user-details/user-details.page';
import { UserDetailsEditPage } from './user-details-edit/user-details-edit.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './state/user.reducers';
import { UserEffects } from './state/user.effects';

const routes: Routes = [
  {
    path: '',
    component: UserListPage
  },
  {
    path: ':id',
    component: UserDetailsPage
  },
  {
    path: ':id/edit',
    component: UserDetailsEditPage
  }
];

@NgModule({
  declarations: [UserListPage, UserDetailsPage, UserDetailsEditPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UsersModule { }
