import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss'],
})
export class PageBComponent {
  private readonly location = inject(Location);

  constructor() {
    console.log('state', this.location.getState());
  }
}
