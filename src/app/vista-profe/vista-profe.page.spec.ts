import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProfePage } from './vista-profe.page';

describe('VistaProfePage', () => {
  let component: VistaProfePage;
  let fixture: ComponentFixture<VistaProfePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
