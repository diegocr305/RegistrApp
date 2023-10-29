import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { alumno } from '../models/alumno';
import { UsersService } from '../services/userservice/users.service';
import { catchError, lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaAlumnoPage implements OnInit {
  
  userInfo?: alumno;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private usersService:UsersService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.userInfo = state['userInfo'];
    }
  }

  async ngOnInit() {
    console.log(this.userInfo?.Rut);
  }

  isCardExpanded = false;

  toggleCard() {
    this.isCardExpanded = !this.isCardExpanded;
  }


  perfilAlum(){  
    this.router.navigate(['/perfil-alumno'], { state: { userInfo:this.userInfo}})
  }

  asistenAlum(){
    this.router.navigate(['/asistencia-alumno'], { state: { userInfo:this.userInfo}})
  }

  horarioAlum(){
    this.router.navigate(['/horario-alumno'], { state: { userInfo:this.userInfo}})
  }

  cursosAlum(){
    this.router.navigate(['/cursos'], { state: { userInfo:this.userInfo}})
  }


  //Redirigir
  home(){
    this.router.navigate(['/home'])
  }
}
