import { createReducer, on } from '@ngrx/store';
import { getUsersAction, getUserById, setSelectedUser } from '../actions/users.action';
import { User } from '../user.model';

export const userReducerKey = 'usersSection';

export interface UsersState {
    selectedUser: User;
    users: Array<User>;
}

const usersInitialState: UsersState = {
    selectedUser: undefined,
    users: []
};

export const usersReducer = createReducer(
    usersInitialState,
    on(getUsersAction, (state, { users }): any => ({ ...state, users }))
);

let initialUserState: User;;
export const setUserReducer = createReducer(initialUserState,
    on(setSelectedUser, (state, { user }): any => user)
);


export const collectionUserReducer = createReducer(
    usersInitialState,
    on(getUsersAction, (state, { users }): any => ({ ...state, users })),
    on(getUserById, (state, { id }): any => (state.users.find(x => x.id === id)))
);




