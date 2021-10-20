import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserListPage } from './user-list/user-list.page';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPage } from './user-details/user-details.page';
import { UserDetailsEditPage } from './user-details-edit/user-details-edit.page';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducers/users.reducer';

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

    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
