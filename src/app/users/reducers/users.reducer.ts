import { createReducer, on } from '@ngrx/store';
import { getUsers } from '../actions/users.action';
import { User } from '../user.model';

export const userReducerKey = 'usersSection';

const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
    initialState,
    on(getUsers, (state, { users }): any => users)
);





