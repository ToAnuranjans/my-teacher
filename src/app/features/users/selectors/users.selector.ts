import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { User } from '../user.model';

export const selectUsers = createSelector(
    (state: AppState) => state.users,
    (users: ReadonlyArray<User>) => users
);

export const selectUser = (id: number) => createSelector(
    selectUsers,
    (users: User[]) => (users.find(x => x.id === id))
);



