import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BookCollectionComponent } from '../book-collection/book-collection.component';
import { BookListComponent } from '../book-list/book-list.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from '../state/books.reducer';
import { collectionReducer } from '../state/collection.reducer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreModule.forRoot(collectionReducer),

    StoreModule.forFeature('books',booksReducer),
  ],
  declarations: [HomePage, BookListComponent, BookCollectionComponent]
})
export class HomePageModule {}
