import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserById } from '../actions/users.action';
import { selectUser } from '../selectors/users.selector';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  imageLoaded = false;
  user$: Observable<User>;
  userId: number;


  constructor(private router: Router, private navCtrl: NavController,
    private route: ActivatedRoute,
    private store: Store) { }


  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.userId = +x.get('id');
      this.user$ = this.store.select(selectUser(this.userId));
      this.store.dispatch(getUserById({ id: this.userId }));
    });
  }

  onEdit() {
    const option: NavigationExtras = {
      relativeTo: this.route,
    };
    this.navCtrl.navigateForward(['../', this.userId, 'edit'], option);
  }
}
