import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./coupens-list/coupens-list.component').then(
        (c) => c.CoupensListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./coupens-create/coupens-create.component').then(
        (c) => c.CoupensCreateComponent
      ),
  },
];
