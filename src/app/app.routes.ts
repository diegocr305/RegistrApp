import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recuperarcontrasena',
    loadComponent: () => import('./recuperarcontrasena/recuperarcontrasena.page').then( m => m.RecuperarcontrasenaPage)
  },
  {
    path: 'loginprofesor',
    loadComponent: () => import('./loginprofesor/loginprofesor.page').then( m => m.LoginprofesorPage)
  },
  {
    path: 'perfil-profesor',
    loadComponent: () => import('./perfil-profesor/perfil-profesor.page').then( m => m.PerfilProfesorPage)
  },
  {
    path: 'perfil-alumno',
    loadComponent: () => import('./perfil-alumno/perfil-alumno.page').then( m => m.PerfilAlumnoPage)
  },
  {
    path: 'login-alumno',
    loadComponent: () => import('./login-alumno/login-alumno.page').then( m => m.LoginAlumnoPage)
  },  {
    path: 'vista-profe',
    loadComponent: () => import('./vista-profe/vista-profe.page').then( m => m.VistaProfePage)
  },


];
