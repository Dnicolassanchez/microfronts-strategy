import { Component } from '@angular/core';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-home';
  ngVersion = packageJson.dependencies['@angular/core'];
  bdsVersion = packageJson.dependencies['@bancolombia/design-system-web'];
}
