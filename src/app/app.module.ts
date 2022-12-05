import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { PaginationPipe } from './shared/pipes/pagination.pipe';
import { PaginatioComponentComponent } from './components/paginatio-component/paginatio-component.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardImageComponent,
    PaginationPipe,
    PaginatioComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
