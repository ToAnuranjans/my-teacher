/* eslint-disable ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/client/api.service';
import * as UserActions from './user.actions';
import { User } from '../user.model';

@Injectable({
    providedIn: 'root'
})
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() => this.api.getData().pipe(
            map((users: User[]) => UserActions.loadUsersSuccess({ users })),
            catchError(error => of(UserActions.loadUsersError({ error })))
        ))
    ));

    constructor(private actions$: Actions, private api: ApiService) {

    }


}
