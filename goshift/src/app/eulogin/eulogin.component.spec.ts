import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuloginComponent } from './eulogin.component';

describe('EuloginComponent', () => {
  let component: EuloginComponent;
  let fixture: ComponentFixture<EuloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
