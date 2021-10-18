import { createReducer, on, Action, State } from '@ngrx/store';

import { Book } from '../book-list/books.model';
import { retrieveBookList } from './books.action';

export const initialState: ReadonlyArray<Book> = [];

// eslint-disable-next-line no-underscore-dangle
export const booksReducer = createReducer(
    initialState,
    on(retrieveBookList, (_state, { books }): any => [...books])
);






// // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// export function booksReducer(state, action: Action) {
//     console.log({ state, action });
//     return _booksReducer(state, action);
// }
