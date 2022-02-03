import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewempshiftComponent } from './viewempshift.component';

describe('ViewempshiftComponent', () => {
  let component: ViewempshiftComponent;
  let fixture: ComponentFixture<ViewempshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewempshiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewempshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
