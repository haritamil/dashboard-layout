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

    trigger('delayedText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SideNavComponent {
  navData = sideNavData;
  sideNavExpanded = input.required<boolean>();
  multiple: boolean = false;

  handleNavClick(data: INavData) {
    this.shrinkItems(data);
    data.expanded = !data.expanded;
    console.log('this.navData', this.navData);
  }

  shrinkItems(item: INavData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
