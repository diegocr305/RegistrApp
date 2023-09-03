import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginprofesorPage } from './loginprofesor.page';

describe('LoginprofesorPage', () => {
  let component: LoginprofesorPage;
  let fixture: ComponentFixture<LoginprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
