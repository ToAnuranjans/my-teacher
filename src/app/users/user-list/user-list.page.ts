import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/users/user.model';
import { getUsers, setSelectedUser } from '../actions/users.action';
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
    private api: ApiService,
    private store: Store) { }


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.api.getData().subscribe((x: User[]) => this.store.dispatch(getUsers({ users: x })));
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


