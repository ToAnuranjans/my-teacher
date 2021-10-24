import { createReducer, on } from '@ngrx/store';

import { retrieveBookList } from './books.action';
import { Book } from '../features/book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrieveBookList, (_state, { books }): any => books)
);
