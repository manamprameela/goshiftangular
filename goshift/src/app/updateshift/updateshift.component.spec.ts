import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateshiftComponent } from './updateshift.component';

describe('UpdateshiftComponent', () => {
  let component: UpdateshiftComponent;
  let fixture: ComponentFixture<UpdateshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateshiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
