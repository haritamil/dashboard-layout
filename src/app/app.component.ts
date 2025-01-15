import {
  Component,
  HostListener,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { from, fromEvent } from 'rxjs';
import { first, map, take, takeWhile, tap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet,
        FontAwesomeModule,
        SideNavComponent,
        HeaderComponent,
        CommonModule,
        RouterLink,
        NumbersOnlyDirective,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'dashboard-layout';
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  sideNavExpanded = signal(true);
  screenWidth = 0;
  doc = inject(DOCUMENT);

  scrollEvent$ = fromEvent(document, 'scroll');
  progress$ = this.scrollEvent$.pipe(
    map(() => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      return progress;
    })
  );

  progress = toSignal(this.progress$, { initialValue: 0 });

  mapCheck$ = from([1, 2, 3, 4])
    .pipe(
      tap((x) => console.log('before', x)),
      // take(3),
      // first(),
      takeWhile((x) => x <= 4, true),
      tap((x) => console.log('after', x)),

      map(() => -1)
    )
    .subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
    });

  // mapCheck = toSignal(this.mapCheck$);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (
      (this.screenWidth <= 768 && this.sideNavExpanded() === true) ||
      (this.screenWidth > 768 && this.sideNavExpanded() === false)
    ) {
      this.sideNavExpanded.update((value) => !value);
    }
  }

  ngOnInit() {
    const { scrollTop, scrollHeight, clientHeight } = this.doc.documentElement;
    console.log(scrollHeight, scrollTop, clientHeight, 'doc');
    console.log(this.progress(), 'pppppppppppppp');

    this.screenWidth = window.innerWidth;
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  toggleSideNav() {
    // this.sideNavExpanded = !this.sideNavExpanded;
    this.sideNavExpanded.update((value: boolean) => !value);
  }
}
