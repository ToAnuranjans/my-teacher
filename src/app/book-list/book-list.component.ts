import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();

  constructor(){
   
  }
  ngOnInit(): void {
    console.log(this.books);
  }
}