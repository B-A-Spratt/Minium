import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcherComponent } from './ocher.component';

describe('OcherComponent', () => {
  let component: OcherComponent;
  let fixture: ComponentFixture<OcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
