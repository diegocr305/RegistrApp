import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosAlumnoPage } from './cursos-alumno.page';

describe('CursosAlumnoPage', () => {
  let component: CursosAlumnoPage;
  let fixture: ComponentFixture<CursosAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
