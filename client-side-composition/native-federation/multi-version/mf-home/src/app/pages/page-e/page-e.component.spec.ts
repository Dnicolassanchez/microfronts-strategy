import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEComponent } from './page-e.component';

describe('PageEComponent', () => {
  let component: PageEComponent;
  let fixture: ComponentFixture<PageEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageEComponent]
    });
    fixture = TestBed.createComponent(PageEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
