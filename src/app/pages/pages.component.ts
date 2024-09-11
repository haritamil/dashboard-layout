import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent implements OnInit {
  // pageId = input.required<string>();
  pageId = signal('');

  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    // console.log('this.pageId', this.pageId());
    // this.activatedRoute.params.subscribe((params) => {
    //   this.pageId.set(params['pageId']);
    // });

    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('pageId')) {
        this.pageId.set(params.get('pageId') ?? '');
      }
    });
  }
}
