import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabLifetimeComponent } from './lab-lifetime.component';

describe('LabLifetimeComponent', () => {
  let component: LabLifetimeComponent;
  let fixture: ComponentFixture<LabLifetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabLifetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabLifetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
