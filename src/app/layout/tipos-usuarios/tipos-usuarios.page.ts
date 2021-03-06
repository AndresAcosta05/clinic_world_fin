import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TiposUsuariosService } from 'src/app/services/tipos-usuarios.service';

@Component({
  selector: 'app-tipos-usuarios',
  templateUrl: './tipos-usuarios.page.html',
  styleUrls: ['./tipos-usuarios.page.scss'],
})
export class TiposUsuariosPage implements OnInit {

  nombre: string = "Formulario Tipo Usuario";
  usuariosList: any = [];
  formTipo_usuario: FormGroup;
  documento: number;
  

  constructor(
    private TiposUsuariosService: TiposUsuariosService,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {

    this.formTipo_usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

   }

  ngOnInit() {
    this.gettipousuarios();
  }


  gettipousuarios() {
    this.TiposUsuariosService.getAllTipoUsuarios().subscribe(data => {
      this.usuariosList = data ? data : [];
    });
  }

  insertTipoUsuarios(tipousuario) {
    //validamos el form
    if(this.formTipo_usuario.valid){
      this.TiposUsuariosService.Insertar(tipousuario).subscribe(() => {
        this.formTipo_usuario.reset();
        this.gettipousuarios();
        this.alerta('Excelente', 'Registro Insertado Tipo Usuario');
      });

    }else {
      this.alerta('Error de Informacion', 'Verifique que los datos sean correctos');
    }
  }

  actualizarTipoUsuario(tipoUsuario: any) {
    this.TiposUsuariosService.Actualizar(this.documento, tipoUsuario).subscribe(() => {
      this.alerta('Excelente', 'Registro Actualizado Correctamente');
      this.formTipo_usuario.reset();
      this.gettipousuarios();
    });
  }

  eliminarTiposUsuarios(codigo, nombre) {
    if (window.confirm(`Desea Eliminar ${nombre}?`)) {
      this.TiposUsuariosService.Eliminar(codigo).subscribe(() => {
        this.alerta('Excelente', 'Registro Eliminado Correctamente');
        this.gettipousuarios();
      });
    }
  }

  seleccionar(tipo_usuarios: any) {
    this.documento = tipo_usuarios.codigo_tipo_us;
    this.formTipo_usuario.setValue({
      nombre: tipo_usuarios.nombre,
      descripcion: tipo_usuarios.descripcion
    });
  }

  //archivo alerta
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
