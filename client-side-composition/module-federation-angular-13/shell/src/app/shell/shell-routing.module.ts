import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGComponent } from './pages/page-g/page-g.component';
import { PageHComponent } from './pages/page-h/page-h.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-g',
    pathMatch: 'full',
  },
  {
    path: 'page-g',
    component: PageGComponent,
  },
  {
    path: 'page-h',
    component: PageHComponent,
  },
  {
    path: 'authentication',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
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
export class ShellRoutingModule {}
