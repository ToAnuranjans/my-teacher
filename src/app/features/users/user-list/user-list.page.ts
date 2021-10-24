import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { User } from 'src/app/features/users/user.model';
import { setSelectedUser, loadUsers } from '../actions/users.action';
import { selectUsers } from '../selectors/users.selector';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users$ = this.store.select((selectUsers));


  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private store: Store) { }


  ngOnInit() {

    this.store.dispatch(loadUsers());
  }


  goToDetails(user: User) {
    const option: NavigationExtras = {
      relativeTo: this.route,
    };

    console.log({ user });
    this.store.dispatch(setSelectedUser({ user }));
    this.navCtrl.navigateForward(['../users', user.id], option);
  }

}


