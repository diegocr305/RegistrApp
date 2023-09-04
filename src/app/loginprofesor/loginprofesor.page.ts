import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Profesor } from '../models/profesor';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginprofesor',
  templateUrl: './loginprofesor.page.html',
  styleUrls: ['./loginprofesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginprofesorPage implements OnInit {

  ListProfesores: Profesor[] = [
    new Profesor('12345678-k', 'Juan', 'Perez', 'ju.perez@duocuc.cl', 'Matemáticas', 'Vespertino', '123'),
    new Profesor('87654321-k', 'Maria', 'Gonzalez', 'ma.gonzalez@duocuc.cl', 'Física','Diurno' , '123'),
  ];

  user = {
    usuario: "",
    password: ""
  }

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  ingresar() {
    for (let i = 0; i < this.ListProfesores.length; i++) {
      if (this.ListProfesores[i].correoElectronico === this.user.usuario && this.ListProfesores[i].contrasena == this.user.password) {
        console.log(this.ListProfesores[i]);
        let navigationExtras: NavigationExtras = {
          state: {
            user: this.ListProfesores[i]
          }
        }
        this.router.navigate(['/perfil-profesor'], navigationExtras);
        break;
      } else {
        console.log(this.ListProfesores[i]);
        this.presentToast("Usuario o contraseña incorrecta")
      }
    }
  }


  async presentToast(message: string, duration: number = 3000) {//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      message: message,
      duration: duration
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
  }
}
