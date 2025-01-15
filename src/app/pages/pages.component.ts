import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
    selector: 'app-pages',
    imports: [RouterLink, HighlightDirective],
    templateUrl: './pages.component.html',
    styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit {
  // pageId = input.required<string>();
  pageId = signal('');
  filter = input();
  fragment = signal('');

  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    // console.log('this.pageId', this.pageId());
    // this.activatedRoute.params.subscribe((params) => {
    //   this.pageId.set(params['pageId']);
    // });

    // console.log('activatedRoute', this.activatedRoute);
    // console.log('snapshot', this.activatedRoute.snapshot);
    // console.log('query params signal', this.filter());
    this.fragment.set(this.activatedRoute.snapshot.url.join('/'));
    // console.log('this.fragment', this.fragment());
    this.jumpIntoFragment(this.activatedRoute.snapshot.fragment ?? '');
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('pageId')) {
        this.pageId.set(params.get('pageId') ?? '');
      }
    });
  }

  jumpIntoFragment(fragment: string): void {
    if (fragment == '') {
      return;
    }
    // document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
