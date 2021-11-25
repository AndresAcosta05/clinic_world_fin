import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-usuarios',
  templateUrl: './tipos-usuarios.page.html',
  styleUrls: ['./tipos-usuarios.page.scss'],
})
export class TiposUsuariosPage implements OnInit {

  nombre: string = "Formulario Tipo Usuario";

  constructor() { }

  ngOnInit() {
  }

}
