import { Routes } from '@angular/router';
import { NotFoundComponent } from 'micro-frontends-config-lib';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'home/page-e',
  },
  {
    path: 'home/page-e',
    loadComponent: () =>
      import('./pages/page-e/page-e.component').then((m) => m.PageEComponent),
  },
  {
    path: 'home/page-f',
    loadComponent: () =>
      import('./pages/page-f/page-f.component').then((m) => m.PageFComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
