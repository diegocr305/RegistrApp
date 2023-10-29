import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-asignatura-profe',
  templateUrl: './asignatura-profe.page.html',
  styleUrls: ['./asignatura-profe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AsignaturaProfePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
