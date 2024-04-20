import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageAComponent } from './pages/page-a/page-a.component';

@NgModule({
  declarations: [PageAComponent, PageBComponent],
  imports: [CommonModule, HostRoutingModule],
})
export class HostModule {}
