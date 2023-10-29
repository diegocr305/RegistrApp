import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.page.html',
  styleUrls: ['./cursos-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CursosAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
