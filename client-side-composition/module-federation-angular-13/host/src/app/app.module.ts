import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostModule } from './host/host.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HostModule,
    BcIconModule.forRoot({
      path: 'https://library-sdb.apps.bancolombia.com/bds/6.22.3',
    }),
    BcButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
