import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'pages/:pageId',
    loadComponent: () =>
      import('./pages/pages.component').then((c) => c.PagesComponent),
  },
  {
    path: 'coupens',
    loadChildren: () =>
      import('./coupens/coupens.routes').then((m) => m.routes),
  },
];
