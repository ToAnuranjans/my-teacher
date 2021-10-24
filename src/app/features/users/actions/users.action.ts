import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const loadUsers = createAction(
    '[User] Load users'
);

export const userLoadSuccess = createAction(
    '[User] loaded successfull',
    props<{ users: User[] }>()
);

export const getUsers = createAction(
    '[User-List] Get Users',
    props<{ users: User[] }>()
);

export const getUserById = createAction(
    '[User] Get User by Id',
    props<{ id: number }>()
);

export const setSelectedUser = createAction(
    '[User] Set Selected User',
    props<{ user: User }>()
);
