import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProfesorPage } from './perfil-profesor.page';

describe('PerfilProfesorPage', () => {
  let component: PerfilProfesorPage;
  let fixture: ComponentFixture<PerfilProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
