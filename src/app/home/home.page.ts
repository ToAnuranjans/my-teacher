import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBooks } from '../state/books.selectors';
import {
  retrieveBookList,
  addBook,
  removeBook,
} from '../state/books.action';
import { GoogleBooksService } from '../book-list/books.service';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  books$ = this.store.select((selectBooks));
  // bookCollection$ = this.store.select(selectBookCollection);


  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {

  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => {
        console.log('xxxxxx', books);
        this.store.dispatch(retrieveBookList({ books }));
      });

    setTimeout(() => {
      this.books$.subscribe(x => console.log('fetchiing..', x));
    }, 100);

  }

  onAdd(bookId) {
    console.log({ bookId });
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }




  // items = [];

  // constructor() {
  //   this.items = Array.from(Array(100))
  //     .map((_x, i) => (
  //       {
  //         trackBy: 1 + i,
  //         name: 'Jungle Book Part -' + (i + 1),
  //         src: 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png'
  //       }
  //     ));
  // }

  // onClick(event: any) {
  //   console.log(event);
  // }

  // onLike(event: any) {
  //   console.log(event);
  // }
}
