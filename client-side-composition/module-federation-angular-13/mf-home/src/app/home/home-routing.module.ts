import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEComponent } from './pages/page-e/page-e.component';
import { PageFComponent } from './pages/page-f/page-f.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-e', pathMatch: 'full' },
  {
    path: 'page-e',
    component: PageEComponent,
  },
  {
    path: 'page-f',
    component: PageFComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
