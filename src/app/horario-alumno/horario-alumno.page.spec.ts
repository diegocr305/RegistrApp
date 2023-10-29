import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioAlumnoPage } from './horario-alumno.page';

describe('HorarioAlumnoPage', () => {
  let component: HorarioAlumnoPage;
  let fixture: ComponentFixture<HorarioAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
