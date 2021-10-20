import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from '../state/books.selectors';
import {
  retrieveBookList,
  addBook,
  removeBook,
} from '../state/books.action';
import { GoogleBooksService } from '../book-list/books.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  books$ = this.store.select(selectBooks);

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
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrieveBookList({ books })));
  }


}
