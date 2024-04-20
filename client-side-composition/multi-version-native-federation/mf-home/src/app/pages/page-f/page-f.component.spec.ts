import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFComponent } from './page-f.component';

describe('PageFComponent', () => {
  let component: PageFComponent;
  let fixture: ComponentFixture<PageFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageFComponent]
    });
    fixture = TestBed.createComponent(PageFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
