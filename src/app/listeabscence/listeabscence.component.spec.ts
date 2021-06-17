import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeabscenceComponent } from './listeabscence.component';

describe('ListeabscenceComponent', () => {
  let component: ListeabscenceComponent;
  let fixture: ComponentFixture<ListeabscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeabscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeabscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
