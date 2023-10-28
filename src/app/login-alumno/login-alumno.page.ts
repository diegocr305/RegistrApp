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

  // ListUsuario: Alumno[] = [
  //   new Alumno('12345678-k', 'Pedro', 'Perez', '20/03/1997', 'Ingeniería en Informática', 'pe.perez@duocuc.cl', 'Vespertino', 'Modelamiento de base de datos', '123'),
  //   new Alumno('87654321-k', 'Matias', 'Varga', '25/12/1990', 'Ingeniería Civil Electrónica', 'ma.vargas@duocuc.cl', 'Diurno', 'Matematica aplicada', '123'),
  // ];

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


    // for (let i = 0; i < this.ListUsuario.length; i++) {
    //   if (this.ListUsuario[i].correoElectronico === this.user.usuario && this.ListUsuario[i].contrasena == this.user.password) {
    //     console.log(this.ListUsuario[i]);
    //     let navigationExtras: NavigationExtras = {
    //       state: {
    //         user: this.ListUsuario[i]
    //       }
    //     }
    //     this.router.navigate(['/perfil-alumno'], navigationExtras);
    //   } else {
    //     this.presentToast("Usuario o contraseña incorrecta")
    //   }
    // }
  }

  async Login(userLoginInfo: userLogin) {
    const user_alumno = await lastValueFrom(this.userservice.getLogin(userLoginInfo));
    console.log(user_alumno);
    if (user_alumno) {
      console.log("Usuario existe...");
      this.router.navigate(['/perfil-alumno'], { state: { userInfo: user_alumno}})
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

  home() {
    this.router.navigate(['/home']);
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

}
