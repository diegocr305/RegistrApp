import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from '../models/profesor';

@Component({
  selector: 'app-loginprofesor',
  templateUrl: './loginprofesor.page.html',
  styleUrls: ['./loginprofesor.page.scss'],
})
export class LoginprofesorPage implements OnInit {

  ListProfesores: Profesor[] = [
    new Profesor('12345678-k', 'Juan', 'Perez', '20/03/1970', 'Matemáticas', 'ju.perez@duocuc.cl', '123'),
    new Profesor('87654321-k', 'Maria', 'Gonzalez', '25/12/1975', 'Física', 'ma.gonzalez@duocuc.cl', '123'),
  ];

  user = {
    usuario: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    for (let i = 0; i < this.ListProfesores.length; i++) {
      if (this.ListProfesores[i].correoElectronico === this.user.usuario && this.ListProfesores[i].contrasena == this.user.password) {
        console.log(this.ListProfesores[i]);
        this.router.navigate(['/home']);
      }
    }
  }
}
