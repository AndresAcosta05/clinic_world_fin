import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public appPages = [
    { title: 'Citas', url: '/citas', icon: 'book' },
    { title: 'Clientes', url: '/cliente', icon: 'man' },
    { title: 'Especialidades', url: '/especialidad', icon: 'medical' },
    { title: 'Asignar Especialidades', url: '/especialidad-medico', icon: 'person-add' },
    { title: 'Medicos', url: '/medicos', icon: 'medkit' },
    { title: 'Tipos Usuarios', url: '/tipos-usuarios', icon: 'keypad' },
    { title: 'Usuarios', url: '/usuarios', icon: 'person' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
