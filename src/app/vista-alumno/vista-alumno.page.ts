import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../models/alumno';
@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaAlumnoPage implements OnInit {
  
  userInfo?: Alumno;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.userInfo = state['userInfo'];
    }
  }

  ngOnInit() {
    console.log(this.userInfo)
  }


  perfilAlum(){
    this.router.navigate(['/perfil-alumno'], { state: { userInfo:this.userInfo}})
  }

  verHorario() {
    // Suponiendo que tienes una página 'horario-alumno'
    this.router.navigate(['/horario-alumno'], { state: { userInfo:this.userInfo } });
}

verAsistencia() {
    // Suponiendo que tienes una página 'asistencia-alumno'
    this.router.navigate(['/asistencia-alumno'], { state: { userInfo:this.userInfo } });
}

verCursos() {
    // Suponiendo que tienes una página 'cursos-alumno'
    this.router.navigate(['/cursos-alumno'], { state: { userInfo:this.userInfo } });
}



}