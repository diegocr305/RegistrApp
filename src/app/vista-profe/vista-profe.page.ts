import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../models/profesor';

@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.page.html',
  styleUrls: ['./vista-profe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaProfePage implements OnInit {

  profesor?: Profesor;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['profesor']) {
      this.profesor = state['profesor'];
    }
  }

  ngOnInit() {
    console.log(this.profesor)
  }


  perfilProfe(){
    this.router.navigate(['/perfil-profesor'], { state: { profesor:this.profesor}})
  }


}
