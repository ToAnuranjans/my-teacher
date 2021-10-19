import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.page.html',
  styleUrls: ['./user-details-edit.page.scss'],
})
export class UserDetailsEditPage implements OnInit {
  user: User = new User(
    1,
    'george.bluth@reqres.in',
    'George',
    'Bluth',
    'https://reqres.in/img/faces/1-image.jpg'
  );
  constructor() { }

  ngOnInit() {
  }

}
