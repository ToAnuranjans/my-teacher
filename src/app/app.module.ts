import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

//MOCK
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieInMemoryMockService } from './services/client/inMemoryMock.service';
@NgModule({
  declarations: [AppComponent],

  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'My Teacher App',
      maxAge: 25,
      logOnly: environment.production,
    }),
    !environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(MovieInMemoryMockService, {
        delay: 100,
      }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
