import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../models/alumno';
import { UsersService } from '../services/userservice/users.service';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilAlumnoPage implements OnInit {
  alumno!: Alumno;//error en alumno

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private userservice: UsersService) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras && navigation.extras.state) {
          this.alumno = navigation.extras.state['userInfo'];
          if (this.alumno && this.alumno['Rut']) {
            this.getAlumnoPerfil(this.alumno['Rut']); // Esta función la deberías tener definida en el mismo componente o en algún servicio.
          }
        }
      });
    }
    


getAlumnoPerfil(rut: string) {
  console.log("Rut solicitado:", rut);

  this.userservice.getPerfilAlumno(this.alumno.Rut).subscribe(
    (data: Alumno) => {
      this.alumno = data;
      console.log("Datos del alumno obtenidos:", data);
    },
    (error) => {
      console.error('Error al obtener el perfil del alumno:', error);
    }
  );
}
  Volver(){

  }
}
