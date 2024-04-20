import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-f.component.html',
  styleUrls: ['./page-f.component.scss'],
})
export class PageFComponent {
  constructor() {
    console.log(window.history.state);
  }
}
