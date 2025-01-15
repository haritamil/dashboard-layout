import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
// import the fromEvent operator
import { fromEvent } from 'rxjs';
@Component({
    selector: 'app-dashboard',
    imports: [],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  button = viewChild<ElementRef>('button');
  show = signal(false);
  detectChange = inject(ChangeDetectorRef);

  ngOnInit() {}

  toggle() {
    this.show.update((value) => !value);
    this.detectChange.detectChanges();
    this.afterShow();
  }

  afterShow() {
    console.log(this.button(), 'button');
    if (this.button() && this.show()) {
      // create an observable of button clicks
      const myObservable = fromEvent(
        this.button()?.nativeElement as HTMLButtonElement,
        'click'
      );

      // for now, let's just log the event on each click
      const subscription = myObservable.subscribe({
        next: (event) => console.log(event),
        error: (err) => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      });
    }
  }
}
