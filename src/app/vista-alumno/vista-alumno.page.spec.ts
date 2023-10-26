import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaAlumnoPage } from './vista-alumno.page';

describe('VistaAlumnoPage', () => {
  let component: VistaAlumnoPage;
  let fixture: ComponentFixture<VistaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
