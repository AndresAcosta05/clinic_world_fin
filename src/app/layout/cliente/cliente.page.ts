import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  nombre: string = "Formulario Clientes";
  clientesList: any = [];
  formClientes: FormGroup;
  documento: number;

  constructor(
    private clientesService: ClientesService,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) { 
    this.formClientes = this.formBuilder.group({
      tipo_documento: ['', Validators.required],
      numero_documento: ['', Validators.required],
      nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getAllClientes().subscribe(data => {
      this.clientesList = data ? data : [];
    });
  }

  insertCliente(cliente) {
    //validamos el form
    if(this.formClientes.valid){
      this.clientesService.Insertar(cliente).subscribe(() => {
        this.formClientes.reset();
        this.getClientes();
        this.alerta('Excelente', 'Registro Insertado Cliente');
      });

    }else {
      this.alerta('Error de Informacion', 'Verifique que los datos sean correctos');
    }
  }

  actualizarCliente(cliente: any) {
    this.clientesService.Actualizar(cliente, this.documento).subscribe(() => {
      this.alerta('Excelente', 'Registro Actualizado Correctamente');
      this.formClientes.reset();
      this.getClientes();
    });
  }

  eliminarCliente(documento: number, nombre, apellido) {
    if (window.confirm(`Desea Eliminar a ${nombre} ${apellido}?`)) {
      this.clientesService.Eliminar(documento).subscribe(() => {
        this.alerta('warning', 'Registro Eliminado Correctamente');
        this.formClientes.reset();
        this.getClientes();
      });
    }
  }

  seleccionar(cliente: any) {
    this.documento = cliente.numero_documento;
    this.formClientes.setValue({
      tipo_documento: cliente.tipo_documento,
      numero_documento: cliente.numero_documento,
      nombre: cliente.nombre,
      segundo_nombre: cliente.segundo_nombre,
      apellido: cliente.apellido,
      segundo_apellido: cliente.segundo_apellido,
      edad: cliente.edad,
      direccion: cliente.direccion,
      correo: cliente.correo,
      telefono: cliente.telefono
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
