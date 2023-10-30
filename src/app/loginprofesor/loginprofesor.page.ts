import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { catchError, lastValueFrom } from 'rxjs';
import { userLogin } from '../models/userLogin';
import { ProfesorserviceService } from '../services/userservice/profesorservice.service';


@Component({
  selector: 'app-loginprofesor',
  templateUrl: './loginprofesor.page.html',
  styleUrls: ['./loginprofesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginprofesorPage implements OnInit {


  // ListProfesores: Profesor[] = [
  //   new Profesor('12345678-k', 'Juan', 'Perez', 'ju.perez@duocuc.cl', 'Matemáticas', 'Vespertino', '123'),
  //   new Profesor('87654321-k', 'Maria', 'Gonzalez', 'ma.gonzalez@duocuc.cl', 'Física','Diurno' , '123'),
  // ];

  user = {
    usuario: "",
    password: ""
  }


  constructor(private router: Router, public toastController: ToastController, private profesorservice: ProfesorserviceService) { }


  ngOnInit() {
  }

  async Login(userLoginInfo: userLogin) {
    const user_profesor = await lastValueFrom(this.profesorservice.getLoginProfe(userLoginInfo));
    console.log(user_profesor);
    if (user_profesor) {
      console.log("Usuario existe...");
      this.router.navigate(['/vista-profe'], { state: {profesor: user_profesor } })
    } else {
      //NO EXISTE
      console.log("Usuario no existe...");
      this.presentToast("Usuario y/o Contraseña incorrectas")
    }
  }

  async presentToast(message: string) {//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      header: 'Datos incorrectos',
      message: message,
      position: 'middle',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: async () => {
            console.log('Botón Aceptar clickeado');
            (await toast).dismiss(); // Cierra el Toast al hacer clic en "Aceptar"
          }
        }
      ]
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
    (await toast).onDidDismiss();
  }


  //   actualizarContrasena(usuario: string, newPassword: string){
  //     for(let i = 0; i < this.ListUsuario.length; i++){
  //       console.log(usuario);  
  //       console.log(newPassword); 

  //       if(this.ListUsuario[i].correoElectronico === usuario){
  //         console.log(this.ListUsuario[i]);   
  //         this.ListUsuario[i].contrasena = newPassword;   
  //         console.log(this.ListUsuario[i]);  

  //         break;
  //       }

  //     }
  //   }

  //Funciones para redirigir 
  recupContrasena() {
    this.router.navigate(['/recuperarcontrasena']);
  }

  home() {
    this.router.navigate(['/home']);
  }

}
