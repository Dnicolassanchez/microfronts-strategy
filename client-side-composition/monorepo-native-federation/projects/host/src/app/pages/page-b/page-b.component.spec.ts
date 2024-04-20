import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBComponent } from './page-b.component';

describe('PageBComponent', () => {
  let component: PageBComponent;
  let fixture: ComponentFixture<PageBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageBComponent]
    });
    fixture = TestBed.createComponent(PageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
