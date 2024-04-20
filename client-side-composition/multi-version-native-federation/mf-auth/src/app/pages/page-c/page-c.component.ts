import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [],
  templateUrl: './page-c.component.html',
  styleUrl: './page-c.component.scss',
})
export class PageCComponent {
  private readonly location = inject(Location);

  constructor() {
    console.log('state', this.location.getState());
  }
}
