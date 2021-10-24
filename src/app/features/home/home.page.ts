import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from '../../state/books.selectors';
import {
  retrieveBookList,
  addBook,
  removeBook,
} from '../../state/books.action';
import { GoogleBooksService } from '../book-list/books.service';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loaded = false;

  books$: Observable<Book[]>;

  bookCollection$ = this.store.select(selectBookCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }



  ngOnInit() {

    this.books$ = this.store.select(selectBooks);

    setTimeout(() => {
      this.booksService
        .getBooks()
        .pipe(debounceTime(3000))
        .subscribe((books) => {
          this.loaded = true;
          this.store.dispatch(retrieveBookList({ books }));
        });
    }, 3000);

  }


}
