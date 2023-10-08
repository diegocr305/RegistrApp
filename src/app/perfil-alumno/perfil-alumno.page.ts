import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilAlumnoPage implements OnInit {
  userInfo: any | undefined;
  constructor( private router: Router, private activateRoute: ActivatedRoute) {
    this.userInfo = this.router.getCurrentNavigation ()?.extras.state?.['user'];
   }

  ngOnInit() {
    console.log(this.userInfo)
  }


  Volver(){
    

  }

}
