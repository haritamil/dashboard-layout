import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { INavData, sideNavData } from './nav-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { SublevelMenuComponent } from './sublevel-menu/sublevel-menu.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule,
    CommonModule,
    SublevelMenuComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SideNavComponent {
  navData = sideNavData;
  sideNavExpanded = input.required<boolean>();

  handleNavClick(data: INavData) {}
}
