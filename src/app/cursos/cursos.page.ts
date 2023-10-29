import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { alumno } from '../models/alumno';
import { carrera } from '../models/carrera';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/userservice/users.service';
import { catchError, lastValueFrom } from 'rxjs';
import { asignatura } from '../models/asignatura';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CursosPage implements OnInit {

  userInfo?: alumno;
  userCarrera?: carrera;
  userAsignatura?:asignatura[] = [];

  constructor(private router: Router, private activateRoute: ActivatedRoute,private userService:UsersService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.userInfo = state['userInfo'];
    }
  }

  async ngOnInit() {
    console.log(this.userInfo);
    //
    const user_carrera = await lastValueFrom(this.userService.getCarrera(this.userInfo?.id_carrera));
    console.log(user_carrera); 
    this.userCarrera = user_carrera;
    //
    const user_asignatura = await lastValueFrom(this.userService.getAsignaturas(this.userInfo?.Rut));
    console.log(user_asignatura); 
    this.userAsignatura = user_asignatura;
  }

  home(nombreAsigna: string | undefined) {

    if (nombreAsigna === "ARQUITECTURA") {
      this.router.navigate(['/home']); // Reemplaza 'ruta-asignatura1' con la ruta real
    } else if (nombreAsigna === 'Asignatura2') {
      this.router.navigate(['/vista-alumno']); // Reemplaza 'ruta-asignatura2' con la ruta real
    } else {
      // Maneja el caso en el que el nombre de la asignatura no coincide con ninguna ruta conocida
    }
  }
  
}
