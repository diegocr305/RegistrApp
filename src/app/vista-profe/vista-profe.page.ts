import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../models/profesor';  // Asegúrate de tener un modelo llamado 'profesor'
import { UsersService } from '../services/userservice/users.service';
import { catchError, lastValueFrom } from 'rxjs';
import { IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.page.html',
  styleUrls: ['./vista-profe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
  

})
export class VistaProfePage implements OnInit {

  userInfo?: Profesor;
  
  constructor(private router: Router, private activateRoute: ActivatedRoute, private usersService: UsersService) {
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

  iniciarAsistencia() {
    this.router.navigate(['/iniciar-asistencia'], { state: { userInfo: this.userInfo } });
  }

  historialAsistencias() {
    this.router.navigate(['/historial-asistencias'], { state: { userInfo: this.userInfo } });
  }

  configuracion() {
    this.router.navigate(['/configuracion'], { state: { userInfo: this.userInfo } });
  }


  ayudaSoporte() {
    this.router.navigate(['/ayuda-soporte'], { state: { userInfo: this.userInfo } });
  }

  home() {
    this.router.navigate(['/home']);
  }
  
  perfilProfe() {this.router.navigate(['/perfil-profesor'], {
    state: {
      profesor: this.userInfo } });
 }
}
