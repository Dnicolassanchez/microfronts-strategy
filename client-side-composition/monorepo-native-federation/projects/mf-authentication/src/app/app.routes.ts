import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/page-c/page-c.component').then((m) => m.PageCComponent),
  },
  {
    path: 'page-d',
    loadComponent: () =>
      import('./pages/page-d/page-d.component').then((m) => m.PageDComponent),
  },
];
