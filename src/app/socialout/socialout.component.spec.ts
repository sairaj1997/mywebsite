import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialoutComponent } from './socialout.component';

describe('SocialoutComponent', () => {
  let component: SocialoutComponent;
  let fixture: ComponentFixture<SocialoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
