import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, SideNavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dashboard-layout';
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  sideNavExpanded = true;

  ngOnInit() {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  toggleSideNav() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }
}
