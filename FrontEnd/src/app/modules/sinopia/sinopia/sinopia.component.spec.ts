import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinopiaComponent } from './sinopia.component';

describe('SinopiaComponent', () => {
  let component: SinopiaComponent;
  let fixture: ComponentFixture<SinopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
