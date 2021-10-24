import { createReducer, on } from '@ngrx/store';
import { getUsers, userLoadSuccess } from '../actions/users.action';
import { User } from '../user.model';

export const userReducerKey = 'usersSection';

const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
    initialState,
    on(userLoadSuccess, (state, { users }): any => users)
);





