import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { UserState } from './user.reducers';


const selectUsersFeature = createFeatureSelector<State>('users');


export const selectAllUsers = createSelector(
    selectUsersFeature,
    (userState: UserState) => userState.users,
);


export const selectCurrentUserId=createSelector(
    selectUsersFeature,
    (userState: UserState) => userState.currentUserId,
);


export const selectCurrentUser=createSelector(
    selectUsersFeature,
    (userState: UserState) => userState.currentUser,
);






