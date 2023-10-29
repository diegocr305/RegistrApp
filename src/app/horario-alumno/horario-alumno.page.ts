import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from '../services/userservice/users.service';

@Component({
  selector: 'app-horario-alumno',
  templateUrl: './horario-alumno.page.html',
  styleUrls: ['./horario-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HorarioAlumnoPage implements OnInit {
  
  rutAlumno?: string;
  horario?: any;  // Definir un tipo adecuado para el horario si tienes uno

  constructor(
    private router: Router,
    private userService: UsersService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.rutAlumno = state['userInfo'].Rut;
    }
  }

  ngOnInit() {
    if (this.rutAlumno) {
      this.userService.getHorarioAlumno(this.rutAlumno).subscribe(data => {
        this.horario = data;
      });
    }
  }
}