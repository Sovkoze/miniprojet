import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleabscenceComponent } from './nouvelleabscence.component';

describe('NouvelleabscenceComponent', () => {
  let component: NouvelleabscenceComponent;
  let fixture: ComponentFixture<NouvelleabscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleabscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleabscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
