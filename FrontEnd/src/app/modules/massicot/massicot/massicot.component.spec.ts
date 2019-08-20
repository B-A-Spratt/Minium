import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassicotComponent } from './massicot.component';

describe('MassicotComponent', () => {
  let component: MassicotComponent;
  let fixture: ComponentFixture<MassicotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassicotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassicotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
