import { Book } from '../book-list/books.model';
import { UsersState } from '../users/reducers/users.reducer';

export interface AppState {
  usersSection: UsersState;
}


export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
