import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeaddComponent } from './employeadd.component';

describe('EmployeaddComponent', () => {
  let component: EmployeaddComponent;
  let fixture: ComponentFixture<EmployeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
