import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHComponent } from './page-h.component';

describe('PageHComponent', () => {
  let component: PageHComponent;
  let fixture: ComponentFixture<PageHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
