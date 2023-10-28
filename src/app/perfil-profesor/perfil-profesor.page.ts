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
    profesor: any;
    constructor(private router: Router) {
      // Recupera los datos pasados desde la página de login
      const navigation = this.router.getCurrentNavigation();
      this.profesor = navigation?.extras.state?.['profesor'];
    }
  
    ngOnInit() {
      console.log(this.userInfo)
    }
}
