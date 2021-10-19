import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  imageLoaded = false;
  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = this.router.getCurrentNavigation().extras.state as User;
    console.log('extras', this.user);
  }
}
