import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PageCComponent } from './pages/page-c/page-c.component';
import { PageDComponent } from './pages/page-d/page-d.component';


@NgModule({
  declarations: [
    PageCComponent,
    PageDComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
