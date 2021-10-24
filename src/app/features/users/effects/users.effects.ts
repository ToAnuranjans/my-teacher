import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/services/client/api.service';
import { getUsers, loadUsers, userLoadSuccess } from '../actions/users.action';
import { User } from '../user.model';

@Injectable({
    providedIn: 'root'
})
export class UsersEffects {

    loadUsers$ = createEffect(() => this.actions$
        .pipe(
            ofType(loadUsers),
            mergeMap(() => this.api.getData()
                .pipe(
                    map((users: User[]) => userLoadSuccess({ users })),
                    catchError(err => of(err))
                )
            )
        ));




    constructor(private actions$: Actions, private api: ApiService) { }






}


