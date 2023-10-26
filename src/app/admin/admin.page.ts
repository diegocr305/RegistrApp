import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersService } from '../services/userservice/users.service';
import { Alumno } from '../models/alumno';
import { Observable, catchError, lastValueFrom, map, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {

  constructor(private router: Router,private userservice: UsersService) { }

  NewUser: Alumno = {
    Rut: '11111111-1',
    Nombre: 'Admin',
    edad: 20,
    correo: 'admin@duocuc.cl',
    password: '123',
    telefono: 12345678,
    id_carrera: 2,
  };

  ngOnInit() {
  }

  async onSubmit(alu: Alumno) {
    // const user_alumno = await lastValueFrom(this.userservice.getLogin());
    // console.log(user_alumno);
    // if (user_alumno) {
      console.info(alu)
      const response = await lastValueFrom(this.userservice.AgregarAlumno(alu));
    // } else {
    //   //NO EXISTE
    //   console.log("Usuario no existe...");
    // }

  }
  
}
