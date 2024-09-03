import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { INavData } from '../nav-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './sublevel-menu.component.html',
  styleUrl: './sublevel-menu.component.scss',
})
export class SublevelMenuComponent {
  data = input.required<INavData>();
  collapsed = input.required<boolean>();
  expanded = input.required<boolean | undefined>();
}
