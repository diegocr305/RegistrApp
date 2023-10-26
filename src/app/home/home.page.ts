import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router : Router) {}

  lP(){
    this.router.navigate(['/loginprofesor']);
  }

  lA(){
    this.router.navigate(['/login-alumno']);
  }

  //const imagen = document.getElementById('ImagenAnimada') as HTMLImageElement;



// // Define la función de animación
//    // function animarImagen() {
//     // Obtén la posición actual de la imagen en píxeles
//     //let posicionActual = parseInt(imagen.style.left);

//     // Define la cantidad de píxeles que se moverá en cada fotograma
//     const velocidad = 1;

//     // Calcula la nueva posición
//     posicionActual += velocidad;

//     // Aplica la nueva posición a la imagen
//     imagen.style.left = `${posicionActual}px`;

//     // Verifica si la imagen ha alcanzado el límite y reinicia la animación
//     if (posicionActual > window.innerWidth) {
//         imagen.style.left = '0px';
//         posicionActual = 0;
//     }

//     // Solicita el próximo cuadro de animación
//     requestAnimationFrame(animarImagen);
// }

// // Inicia la animación
// animarImagen();












}
