import { Book } from '../book-list/books.model';
import { User } from '../users/user.model';




export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  users: ReadonlyArray<User>;
}
