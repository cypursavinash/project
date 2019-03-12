import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcdetailComponent } from './calcdetail.component';

describe('CalcdetailComponent', () => {
  let component: CalcdetailComponent;
  let fixture: ComponentFixture<CalcdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
