import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TiposUsuariosService } from 'src/app/services/tipos-usuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  nombre: string = "Formulario Usuario";
  formUsuarios: FormGroup;
  tipoUsuarioList: any = [];
  usuarioList: any = [];
  documento: number;

  constructor(
    private formBuilder: FormBuilder,
    private tipoUsuarioService: TiposUsuariosService,
    private usuariosService: UsuariosService,
    private alertController: AlertController
  ) {
    this.formUsuarios = this.formBuilder.group({
      tipo_documento: ['', Validators.required],
      numero_documento: ['', Validators.required],
      nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      idTipo_usuario: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getTipoUsuarios();
    this.getUsuarios();
  }

  getTipoUsuarios() {
    this.tipoUsuarioService.getAllTipoUsuarios().subscribe(data => {
      this.tipoUsuarioList = data ? data : [];
    });
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      // console.log(data);
      this.usuarioList = data ? data : [];
    });
  }

  insertUsuario(usuario: any) {
    if (this.formUsuarios.valid) {
      this.usuariosService.insertUsuario(usuario).subscribe(() => {
        this.formUsuarios.reset();
        this.getUsuarios();
        this.alerta('Excelente', 'Registro Insertado Correctamente');
      });
    } else {
      this.alerta('Error de Informacion', 'Verifique que los datos sean correctos');
    }
  }

  updateUsuario(usuario) {
    this.usuariosService.updateUsuarios(usuario, this.documento).subscribe(() => {
      this.alerta('Excelente', 'Registro Actualizado Correctamente');
      this.formUsuarios.reset();
      this.getUsuarios();
    });
  }

  eliminarUsuario(documento: number, nombre: string, apellido: string) {
    if (window.confirm(`Desea Eliminar a ${nombre} ${apellido}?`)) {
      this.usuariosService.deleteUsuario(documento).subscribe(() => {
        this.alerta('Excelente', 'Registro Eliminado Correctamente');
        this.getUsuarios();
      });
    }
  }

  seleccionar(usuario: any) {
    this.documento = usuario.numero_documento;
    this.formUsuarios.setValue({
      tipo_documento: usuario.tipo_documento,
      numero_documento: usuario.numero_documento,
      nombre: usuario.nombre,
      segundo_nombre: usuario.segundo_nombre,
      apellido: usuario.apellido,
      segundo_apellido: usuario.segundo_apellido,
      edad: usuario.edad,
      direccion: usuario.direccion,
      correo: usuario.correo,
      telefono: usuario.telefono,
      usuario: usuario.usuario,
      contraseña: usuario.contraseña,
      idTipo_usuario: usuario.idTipo_usuario
    });
  }

  async alerta(titulo, texto) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: texto,
      buttons: ['Entendido']
    });

    await alert.present();
  }
}
