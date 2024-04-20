import { Routes } from '@angular/router';
import { startsWith } from './starts-with';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { WrapperConfig } from './components/wrapper/wrapper.config';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a',
  },
  {
    path: 'page-a',
    loadComponent: () =>
      import('./pages/page-a/page-a.component').then((m) => m.PageAComponent),
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./pages/page-b/page-b.component').then((m) => m.PageBComponent),
  },
  {
    matcher: startsWith('authentication'),
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mf-authentication',
        exposedModule: './web-components',
        elementName: 'mf-authentication-root',
      } as WrapperConfig,
    },
  },
  {
    matcher: startsWith('home'),
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mf-home',
        exposedModule: './web-components',
        elementName: 'mf-home-root',
      } as WrapperConfig,
    },
  },
];
