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
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },  {
    path: 'recuperarcontrasena',
    loadComponent: () => import('./recuperarcontrasena/recuperarcontrasena.page').then( m => m.RecuperarcontrasenaPage)
  },
  {
    path: 'loginprofesor',
    loadComponent: () => import('./loginprofesor/loginprofesor.page').then( m => m.LoginprofesorPage)
  },

];
