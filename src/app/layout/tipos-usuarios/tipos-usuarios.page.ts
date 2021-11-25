import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-tipos-usuarios',
  templateUrl: './tipos-usuarios.page.html',
  styleUrls: ['./tipos-usuarios.page.scss'],
})
export class TiposUsuariosPage implements OnInit {

  nombre: string = "Formulario Tipo Usuario";
  usuariosList: any = [];
  formUsuarios: FormGroup;
  documento: number;

  constructor() { }

  ngOnInit() {
  }

}
