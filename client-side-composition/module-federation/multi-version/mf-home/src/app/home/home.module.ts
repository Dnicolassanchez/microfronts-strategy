import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageEComponent } from './pages/page-e/page-e.component';
import { PageFComponent } from './pages/page-f/page-f.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';

@NgModule({
  declarations: [PageEComponent, PageFComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BcIconModule.forRoot({
      path: 'https://library-sdb.apps.bancolombia.com/bds/6.22.4',
    }),
    BcButtonModule,
  ],
})
export class HomeModule {}
