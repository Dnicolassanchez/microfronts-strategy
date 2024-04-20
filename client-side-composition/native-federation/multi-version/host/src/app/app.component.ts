import { Component, NgZone, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isDarkMode = signal(false);
  title = signal('host');
  ngVersion = signal(packageJson.dependencies['@angular/core']);
  bdsVersion = signal(
    packageJson.dependencies['primeng']
  );

  constructor() {
    (globalThis as any).ngZone = inject(NgZone);
    (globalThis as any).router = inject(Router);
  }
}
