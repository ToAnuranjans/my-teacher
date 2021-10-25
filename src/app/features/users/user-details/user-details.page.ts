import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user.model';

import * as UserSelectors from '../state/user.selectors';

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
    this.user$ = this.store.select(UserSelectors.selectCurrentUser);

    this.userId = +this.route.snapshot.params.id;
  }

  onEdit() {
    const option: NavigationExtras = {
      relativeTo: this.route,
    };
    this.navCtrl.navigateForward(['../', this.userId, 'edit'], option);
  }
}
