import { createReducer, on } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import * as UserActions from './user.actions';
import { User } from '../user.model';

export const userReducerKey = 'usersSection';

export interface UserState extends State {
    users: ReadonlyArray<User>;
    currentUserId: number;
    currentUser: User;
    fetchingUsers: boolean;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    currentUserId: 0,
    fetchingUsers: false
};


export const usersReducer = createReducer(
    initialState,
    on(UserActions.loadUsers, (state): UserState => ({ ...state, fetchingUsers: true })),
    on(UserActions.loadUsersSuccess, (state, { users }): UserState => ({ ...state, fetchingUsers: false, users })),
    on(UserActions.setCurrentUserId, (state, { id }): UserState => {
        if (state?.users?.length) {
            const user = state.users.find((x: User) => x.id === id);
            return { ...state, currentUser: user, currentUserId: id };
        }
        return state;
    }),
    on(UserActions.getCurrentUser, (state, { user }): UserState => ({ ...state, currentUser: user })),
    on(UserActions.updateCurrentUser, (state, { id, user }): UserState => {
        if (state?.users?.length) {
            const users = state.users.map((x: User) => x.id === id? user:x);
            return { ...state, currentUser: user, currentUserId: id, users };
        }
        return state;
    }),
);





