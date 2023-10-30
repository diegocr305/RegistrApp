import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { alumno } from '../models/alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/userservice/users.service';
import { registroAsistencia } from '../models/registroAsistencia';
import { catchError, lastValueFrom } from 'rxjs';
import { seccion } from '../models/seccion';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AsistenciaAlumnoPage implements OnInit {

  userInfo?: alumno;
  userRegistro?: registroAsistencia [] | undefined = [];
  userSeccion?: seccion;

  constructor(private router: Router, private activateRoute: ActivatedRoute,private userService:UsersService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['userInfo']) {
      this.userInfo = state['userInfo'];
    }
  }
  async ngOnInit() {
    console.log(this.userInfo);
    const user_RegistroAsis = await lastValueFrom(this.userService.getRegistroAsistencia(this.userInfo?.Rut));
    console.log(user_RegistroAsis); 
    this.userRegistro = user_RegistroAsis;
    //

    if (this.userRegistro) {
      // userRegistro no es undefined, puedes acceder a sus propiedades de manera segura
      for (const registro of this.userRegistro) {
          // Llama a getSeccion para obtener información de la sección
          const user_Seccion = await lastValueFrom(this.userService.getSeccion(registro.id_seccion));
          console.log(user_Seccion);
          //this.userRegistro = user_Seccion;
      }
      console.log("hola",this.userRegistro)
      // Resto de tu código aquí
    } else {
      // userRegistro es undefined, realiza el manejo de este caso si es necesario
    }


  }

}
