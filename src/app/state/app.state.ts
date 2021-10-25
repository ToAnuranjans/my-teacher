import { Book } from '../features/book-list/books.model';
import { User } from '../features/users/user.model';




export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  users: ReadonlyArray<User>;
}


export interface State {
  appName?: string ;
}






