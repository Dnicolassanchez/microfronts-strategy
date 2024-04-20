import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/page-a/page-a.component').then((m) => m.PageAComponent),
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./pages/page-b/page-b.component').then((m) => m.PageBComponent),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      loadRemoteModule('mfAuthentication', './routes').then((m) => m.routes),
  },
];
