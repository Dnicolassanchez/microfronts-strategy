import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-a',
    pathMatch: 'full',
  },
  {
    path: 'page-a',
    component: PageAComponent,
  },
  {
    path: 'page-b',
    component: PageBComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      })
        .then((m) => m.HomeModule)
        .catch((error) => {
          console.log('Error loading auth module', error);
        }),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './Module',
      })
        .then((m) => m.AuthenticationModule)
        .catch((error) => {
          console.log('Error loading auth module', error);
        }),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostRoutingModule {}
