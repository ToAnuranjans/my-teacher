/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import * as UserSelectors from '../state/user.selectors';
import * as UserActions from '../state/user.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.page.html',
  styleUrls: ['./user-details-edit.page.scss'],
})
export class UserDetailsEditPage implements OnInit {
  imageLoaded = false;
  userSub: Subscription;
  userId: number;
  userForm: FormGroup;
  user: User;


  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder) { }


  ngOnInit() {
    this.userSub = this.store.select(UserSelectors.selectCurrentUser)
      .subscribe(u => {
        this.user = u;
      });

    this.userId = +this.route.snapshot.params.id;

    this.userForm = this.fb.group({
      first_name: [this.user?.first_name],
      last_name: [this.user?.last_name]
    });
  }

  onSave() {
    this.userForm.updateValueAndValidity();
    const { first_name, last_name } = this.userForm.value;
    this.store.dispatch(UserActions.updateCurrentUser({ id: this.userId, user: { ...this.user, first_name, last_name } as User }));
  }

  ionViewDidLeave() {
    this.userSub.unsubscribe();
  }

}
