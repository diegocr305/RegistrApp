import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaProfePage } from './asignatura-profe.page';

describe('AsignaturaProfePage', () => {
  let component: AsignaturaProfePage;
  let fixture: ComponentFixture<AsignaturaProfePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturaProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
