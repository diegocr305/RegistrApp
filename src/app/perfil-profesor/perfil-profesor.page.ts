import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilProfesorPage implements OnInit {
    userInfo: any | undefined;
    constructor( private router: Router, private activateRoute: ActivatedRoute) {
      this.userInfo = this.router.getCurrentNavigation ()?.extras.state?.['user'];
     }
  
    ngOnInit() {
      console.log(this.userInfo)
    }
}
