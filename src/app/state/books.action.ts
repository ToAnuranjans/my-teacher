import { createAction, props } from '@ngrx/store';
import { Book } from '../features/book-list/books.model';

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId: string }>()
);

export const removeBook = createAction(
    '[Book List] Remove Book',
    props<{ bookId: string }>()
);

export const retrieveBookList = createAction(
    '[Book List] Retreive list of books from API',
    props<{books: ReadonlyArray<Book> }>()
);

