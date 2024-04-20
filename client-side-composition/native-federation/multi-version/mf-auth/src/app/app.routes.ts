import { Routes } from '@angular/router';
import { NotFoundComponent } from 'micro-frontends-config-lib';

export const routes: Routes = [
  {
    path: 'authentication',
    pathMatch: 'full',
    redirectTo: 'authentication/page-c',
  },
  {
    path: 'authentication/page-c',
    loadComponent: () =>
      import('./pages/page-c/page-c.component').then((m) => m.PageCComponent),
  },
  {
    path: 'authentication/page-d',
    loadComponent: () =>
      import('./pages/page-d/page-d.component').then((m) => m.PageDComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
