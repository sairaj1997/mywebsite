import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfeedbackComponent } from './showfeedback.component';

describe('ShowfeedbackComponent', () => {
  let component: ShowfeedbackComponent;
  let fixture: ComponentFixture<ShowfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
