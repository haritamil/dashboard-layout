import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    SideNavComponent,
    HeaderComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dashboard-layout';
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  sideNavExpanded = signal(true);
  screenWidth = 0;

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
