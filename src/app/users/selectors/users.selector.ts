import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { UsersState } from '../reducers/users.reducer';
import { User } from '../user.model';

export const selectUsers = createSelector(
    (state: AppState) => state.usersSection,
    (state: UsersState) => state.users
);


export const userFeature = (state: AppState) => state.usersSection;

export const selectUser = (id: number) => createSelector(
    selectUsers,
    (users: User[]) => (users.find(x => x.id === id))
);




const user1 = {
    id: 5,
    email: 'charles.morris@reqres.in',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    first_name: 'Charles',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg'
} as User;


