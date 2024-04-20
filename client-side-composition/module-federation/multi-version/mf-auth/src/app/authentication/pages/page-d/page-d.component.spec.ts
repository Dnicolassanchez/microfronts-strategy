import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDComponent } from './page-d.component';

describe('PageDComponent', () => {
  let component: PageDComponent;
  let fixture: ComponentFixture<PageDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
