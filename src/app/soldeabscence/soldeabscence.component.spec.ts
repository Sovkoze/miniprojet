import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeabscenceComponent } from './soldeabscence.component';

describe('SoldeabscenceComponent', () => {
  let component: SoldeabscenceComponent;
  let fixture: ComponentFixture<SoldeabscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldeabscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldeabscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
