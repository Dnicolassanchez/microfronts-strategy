import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = signal('mf-home');
  ngVersion = signal(packageJson.dependencies['@angular/core']);
  //bdsVersion = signal(
  //  packageJson.dependencies['@bancolombia/design-system-web']
  //);
  bdsVersion = signal('1.0.0');

  constructor() {
    connectRouter();
  }
}
