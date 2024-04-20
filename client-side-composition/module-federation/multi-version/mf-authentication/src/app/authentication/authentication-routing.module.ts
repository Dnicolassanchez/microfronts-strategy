import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCComponent } from './pages/page-c/page-c.component';
import { PageDComponent } from './pages/page-d/page-d.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-c', pathMatch: 'full' },
  {
    path: 'page-c',
    component: PageCComponent,
  },
  {
    path: 'page-d',
    component: PageDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
