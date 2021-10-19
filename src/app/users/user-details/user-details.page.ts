import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  imageLoaded = false;
  user: User;
  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.router.getCurrentNavigation().extras.state as User;
    console.log('extras', this.user);
  }

  onEdit() {
    const option: NavigationExtras = {
      relativeTo: this.route,
      state: this.user
    };
    this.navCtrl.navigateForward(['../', this.user.id,'edit'], option);
  }
}
