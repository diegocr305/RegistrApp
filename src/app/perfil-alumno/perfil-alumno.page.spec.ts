import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAlumnoPage } from './perfil-alumno.page';

describe('PerfilAlumnoPage', () => {
  let component: PerfilAlumnoPage;
  let fixture: ComponentFixture<PerfilAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
