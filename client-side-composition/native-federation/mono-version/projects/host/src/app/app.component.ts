import { ButtonModule } from 'primeng/button';
import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var require: any;
const packageJson = require('../../../../package.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  isDarkMode = signal(false);
  title = signal('Host');
  ngVersion = signal(packageJson.dependencies['@angular/core']);
  bdsVersion = signal(
    packageJson.dependencies['primeng']
  );

  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update((prev) => !prev);
  }
}
