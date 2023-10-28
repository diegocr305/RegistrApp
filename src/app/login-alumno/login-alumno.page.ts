import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Alumno } from '../models/alumno';
import { UsersService } from '../services/userservice/users.service';
import { catchError, lastValueFrom } from 'rxjs';
import { userLogin } from '../models/userLogin';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginAlumnoPage implements OnInit {

  user = {
    usuario: "",
    password: ""
  }

  constructor(private router: Router, public toastController: ToastController, private userservice: UsersService) { }

  ngOnInit() {
  }

  ingresar() {
    console.log(this.user)
    this.userservice.getLogin(this.user).subscribe(
      (data) => {
        console.log(data.edad)
      }
    );
  }

  async Login(userLoginInfo: userLogin) {
    const user_alumno = await lastValueFrom(this.userservice.getLogin(userLoginInfo));
    console.log(user_alumno);
    if (user_alumno) {
      console.log("Usuario existe...");
      this.router.navigate(['/vista-alumno'], { state: { userInfo: user_alumno}})
    } else {
      //NO EXISTE
      console.log("Usuario no existe...");
      this.presentToast("Usuario y/o Contraseña incorrectas")
    }
  }

  async presentToast(message: string
    ) {//creacion de una funcion asincronica
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
  recupContrasena(){
    this.router.navigate(['/recuperarcontrasena']);

  }

  home() {
    this.router.navigate(['/home']);
  }

}
