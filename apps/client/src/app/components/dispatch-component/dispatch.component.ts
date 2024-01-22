import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  decrement,
  reset,
  increment,
  setValue,
} from '../../store/counter.actions';

@Component({
  selector: 'two-way-edit',
  templateUrl: './dispatch.component.html',
  styleUrl: 'dispatch.component.scss',
})
export class DispatchComponent {
  constructor(private store: Store<{ count: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setValue(value: number) {
    this.store.dispatch(setValue(value));
  }
}
