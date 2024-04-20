import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGComponent } from './page-g.component';

describe('PageGComponent', () => {
  let component: PageGComponent;
  let fixture: ComponentFixture<PageGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
