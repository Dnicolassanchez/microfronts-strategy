import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PageCComponent } from './pages/page-c/page-c.component';
import { PageDComponent } from './pages/page-d/page-d.component';

@NgModule({
  declarations: [PageCComponent, PageDComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    BcIconModule.forRoot({
      path: 'https://library-sdb.apps.bancolombia.com/bds/6.22.2',
    }),
    BcButtonModule,
  ],
})
export class AuthenticationModule {}
