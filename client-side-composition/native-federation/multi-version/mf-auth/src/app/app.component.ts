import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);

  isDarkMode = signal(false);
  title = signal('mf-authentication');
  ngVersion = signal(packageJson.dependencies['@angular/core']);
  //bdsVersion = signal(
  //  packageJson.dependencies['@bancolombia/design-system-web']
  //);
  bdsVersion = signal('1.0.0');

  constructor() {
    connectRouter();
  }

  navigateTo(path: string): void {
    this.router.navigate([path], { state: { pruebas: 'hola' } });
  }
}
