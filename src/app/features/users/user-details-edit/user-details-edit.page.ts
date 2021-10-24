import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserById } from '../actions/users.action';
import { selectUser } from '../selectors/users.selector';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.page.html',
  styleUrls: ['./user-details-edit.page.scss'],
})
export class UserDetailsEditPage implements OnInit {
  imageLoaded = false;
  user$: Observable<User>;
  userId: number;


  constructor(
    private route: ActivatedRoute,
    private store: Store) { }


  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.userId = +x.get('id');
      this.user$ = this.store.select(selectUser(this.userId));
      this.store.dispatch(getUserById({ id: this.userId }));
    });
  }

  onSave() { }


}
