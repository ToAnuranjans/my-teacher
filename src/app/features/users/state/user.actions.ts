import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';


export const loadUsers = createAction(
    '[User] users loading started'
);

export const loadUsersSuccess = createAction(
    '[User] users loaded successfully',
    props<{ users: ReadonlyArray<User> }>()
);

export const loadUsersError = createAction(
    '[User] Failed Loading users',
    props<{ error: string }>()
);


export const setCurrentUserId = createAction(
    '[User] set current user',
    props<{ id: number }>()
);

export const getCurrentUser = createAction(
    '[User] get current user',
    props<{ user: User }>()
);
export const updateCurrentUser = createAction(
    '[Edit User Details] Edit current user detail',
    props<{ id: number, user: User }>()
);
