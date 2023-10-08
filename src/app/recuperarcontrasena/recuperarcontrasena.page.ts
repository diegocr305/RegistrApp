import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginAlumnoPage } from '../login-alumno/login-alumno.page';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [LoginAlumnoPage],
})
export class RecuperarcontrasenaPage implements OnInit {

  user={
    usuario: "",
    newPassword: ""
  }

  constructor(private loginAlumno: LoginAlumnoPage, private router: Router) { }

  ngOnInit() {
  }


  recuperarContrasena(){
    // this.loginAlumno.actualizarContrasena(this.user.usuario, this.user.newPassword);
    // console.log(`Contraseña cambiada exitosamente para ${this.user.usuario}`);
    this.loginAlumno.presentToast("Contraseña cambiada exitosamente");
    this.router.navigate(['/login-alumno']); 

  }

}
