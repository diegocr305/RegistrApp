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

}
