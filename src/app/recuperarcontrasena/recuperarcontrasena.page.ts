import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [LoginPage],
})
export class RecuperarcontrasenaPage implements OnInit {

  user={
    usuario: "",
    newPassword: ""
  }

  constructor(private loginPage: LoginPage, private router: Router) { }

  ngOnInit() {
  }


  recuperarContrasena(){
    // this.loginPage.actualizarContrasena(this.user.usuario, this.user.newPassword);
    // console.log(`Contraseña cambiada exitosamente para ${this.user.usuario}`);
    this.loginPage.presentToast("Contraseña cambiada exitosamente");
    this.router.navigate(['/login']); 

  }

}
