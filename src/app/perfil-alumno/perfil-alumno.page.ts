import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { alumno } from '../models/alumno';
import { UsersService } from '../services/userservice/users.service';
import { catchError, lastValueFrom } from 'rxjs';
import { carrera } from '../models/carrera';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilAlumnoPage implements OnInit {
  
  userInfo?: alumno;
  userCarrera?: carrera;

  constructor(private router: Router, private activateRoute: ActivatedRoute,private userService:UsersService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.userInfo = state['userInfo'];
    }
  }

  async ngOnInit() {
    console.log(this.userInfo);
    const user_carrera = await lastValueFrom(this.userService.getCarrera(this.userInfo?.id_carrera));
    console.log(user_carrera); 
    this.userCarrera = user_carrera;
  }
  

}
