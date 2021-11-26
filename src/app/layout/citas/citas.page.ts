import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildActivationStart } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CitasService } from 'src/app/services/citas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { EspecialidadesMedicosService } from 'src/app/services/especialidades-medicos.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  nombre: string = "Formulario Citas";
  formCitas: FormGroup;
  clientesList: any = [];
  asignacionesList: any = [];
  citasList: any = [];
  codigo: any;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private asignacionesService: EspecialidadesMedicosService,
    private citasService: CitasService,
    private alertController: AlertController
  ) {
    this.formCitas = this.formBuilder.group({
      idCliente: [Validators, Validators.required],
      idEspecialidad_medico: [Validators, Validators.required],
      fecha_hora: [Validators, Validators.required]
    });
  }

  ngOnInit() {
    this.getClientes();
    this.getAsignaciones();
    this.getCitas();
  }

  insertCita(cita: any) {
    if (this.formCitas.valid) {
      this.citasService.insertCita(cita).subscribe(() => {
        this.formCitas.reset();
        this.alerta('Excelente', 'Registro Insertado Correctamente');
        this.getCitas();
      });
    } else {
      this.alerta('Error de Informacion', 'Verifique que los datos sean correctos');
    }
  }

  updateCita(cita: any) {
    this.citasService.updateCita(cita, this.codigo).subscribe(() => {
      this.getCitas();
      this.alerta('Excelente', 'Registro Actualizado Correctamente');
      this.formCitas.reset();
    });
  }

  deleteCita(codigo, cliente, fecha) {
    if (window.confirm(`Desea Eliminar la Cita del ${cliente} del dia ${fecha}?`)) {
      this.citasService.deleteCita(codigo).subscribe(() => {
        this.getCitas();
        this.alerta('Excelente', 'Registro Eliminado Correctamente');
      });
    }
  }

  getClientes() {
    this.clientesService.getAllClientes().subscribe(data => {
      this.clientesList = data ? data : [];
    });
  }

  getAsignaciones() {
    this.asignacionesService.getEspecialidades_Medico().subscribe(data => {
      this.asignacionesList = data ? data : [];
    });
  }

  getCitas() {
    this.citasService.getAllCitas().subscribe(data => {
      this.citasList = data ? data : [];
      console.log(data);
      
    });
  }

  seleccionar(cita) {
    this.codigo = cita.codigo; 
    this.formCitas.setValue({
      idCliente: cita.idCliente,
      idEspecialidad_medico: cita.idEsp_Medico,
      fecha_hora: cita.fecha
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
