import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterGlobalUtil } from '../utils/router-global.util';

interface RouterState {
  [k: string]: any;
}

@Component({
  selector: 'app-not-found',
  template: '',
  standalone: true,
})
export class NotFoundComponent {
  private readonly globalRouter = inject(RouterGlobalUtil);
  private readonly location = inject(Location);

  constructor() {
    this.globalRouter.navigate(
      [`${location.pathname.substring(1)}${location.search}`],
      { state: this.location.getState() as RouterState }
    );
  }
}
