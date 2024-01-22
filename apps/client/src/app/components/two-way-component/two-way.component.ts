import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { setValue } from '../../store/counter.actions';

@Component({
  selector: 'two-way-component',
  templateUrl: './two-way.component.html',
})
export class TwoWayComponent {
  count$: BehaviorSubject<number | undefined> = new BehaviorSubject<
    number | undefined
  >(undefined);

  get count(): number | undefined {
    return this.count$.getValue();
  }

  set count(value: number) {
    this.store.dispatch(setValue(value));
  }

  constructor(private store: Store<{ count: number }>) {
    this.store.select('count').subscribe((count) => {
      this.count$.next(count);
    });
  }
}
