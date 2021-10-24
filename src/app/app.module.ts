import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

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
      name:'My Teacher App',
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule { }
