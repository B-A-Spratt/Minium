import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrpimentComponent } from './orpiment.component';

describe('OrpimentComponent', () => {
  let component: OrpimentComponent;
  let fixture: ComponentFixture<OrpimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrpimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrpimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
