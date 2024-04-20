import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [ CommonModule, ButtonModule, RouterLink ],
  templateUrl: './page-c.component.html',
  styleUrls: [ './page-c.component.scss' ]
})
export class PageCComponent {

}
