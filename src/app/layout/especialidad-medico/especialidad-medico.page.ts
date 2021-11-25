import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidad-medico',
  templateUrl: './especialidad-medico.page.html',
  styleUrls: ['./especialidad-medico.page.scss'],
})
export class EspecialidadMedicoPage implements OnInit {

  nombre: string = "Formulario Asignar Especialidad";

  constructor() { }

  ngOnInit() {
  }

}
