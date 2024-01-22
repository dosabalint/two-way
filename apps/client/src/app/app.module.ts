import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DispatchComponent } from './components/dispatch-component/dispatch.component';
import { QueryComponent } from './components/query-component/query.component';
import { TwoWayComponent } from './components/two-way-component/two-way.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DispatchComponent,
    QueryComponent,
    TwoWayComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    RouterModule,
    AsyncPipe,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
