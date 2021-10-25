import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { User } from 'src/app/features/users/user.model';
import * as UserSelectors from '../state/user.selectors';
import * as UserActions from '../state/user.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users$ = this.store.select((UserSelectors.selectAllUsers));

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private store: Store) { }


  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }


  goToDetails(user: User) {
    const option: NavigationExtras = {
      relativeTo: this.route,
    };

    this.store.dispatch(UserActions.setCurrentUserId({ id: user.id }));

    console.log({ user });
    this.navCtrl.navigateForward(['../users', user.id], option);
  }

}


