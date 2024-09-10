import { Component, inject, input, OnInit, effect } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { INavData, sideNavData } from './nav-data';
import { Router, RouterModule } from '@angular/router';
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
import { fadeInout } from './nav-helper';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule,
    CommonModule,
    SublevelMenuComponent,
    CommonModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [
    fadeInout,
    trigger('delayedText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SideNavComponent implements OnInit {
  navData = sideNavData;
  router = inject(Router);
  sideNavExpanded = input.required<boolean>();
  multiple: boolean = false;

  constructor() {
    effect(() => {
      if (this.sideNavExpanded() === false) {
        const index = this.navData.findIndex(
          (x: INavData) => x.expanded === true
        );
        if (index !== -1) {
          this.navData[index].expanded = false;
        }
      }
    });
  }

  ngOnInit() {}

  handleNavClick(data: INavData) {
    this.shrinkItems(data);
    data.expanded = this.sideNavExpanded() ? !data.expanded : false;
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

  getActiveClass(item: INavData) {
    return this.router.url.includes(item.routeLink) ? 'active' : '';
  }
}
