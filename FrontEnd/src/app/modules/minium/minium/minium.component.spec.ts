import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniumComponent } from './minium.component';

describe('MiniumComponent', () => {
  let component: MiniumComponent;
  let fixture: ComponentFixture<MiniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
