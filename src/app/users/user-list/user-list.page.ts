import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {


  users$: Observable<User[]>;

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService) { }



  ngOnInit() {
    this.users$ = this.api.getData();
  }

  goToDetails(user: User) {
    const option: NavigationExtras = {
      relativeTo: this.route,
      state: user
    };
    this.navCtrl.navigateForward(['../users', user.id], option);
  }

}
