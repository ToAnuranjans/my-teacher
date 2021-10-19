import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.page.html',
  styleUrls: ['./user-details-edit.page.scss'],
})
export class UserDetailsEditPage implements OnInit {
  user: User;
  imageLoaded = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = this.router.getCurrentNavigation().extras.state as User;
    console.log('extras', this.user);
  }

  onSave() { }


}
