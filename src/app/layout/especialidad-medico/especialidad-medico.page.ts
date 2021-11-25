import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { EspecialidadesMedicosService } from 'src/app/services/especialidades-medicos.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-especialidad-medico',
  templateUrl: './especialidad-medico.page.html',
  styleUrls: ['./especialidad-medico.page.scss'],
})
export class EspecialidadMedicoPage implements OnInit {

  nombre: string = "Formulario Asignar Especialidad";
  formAsignaciones: FormGroup;
  espMedicoList: any = [];
  codigo: any;
  nuevaAsignacion: any = {
    fecha: ''
  };
  //Variables para los selects
  selectEspecialidades: any = [];
  selectMedicos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private especialidadesService: EspecialidadesService,
    private medicosService: UsuariosService,
    private alertController: AlertController,
    private espMedicosService: EspecialidadesMedicosService
  ) {
    this.formAsignaciones = this.formBuilder.group({
      idUsuario: [Validators, Validators.required],
      idEspecialidad: [Validators, Validators.required]
    });
  }

  ngOnInit() {
    this.getEspecialidades();
    this.getMedicos();
    this.getEspMedicos();
  }

  getEspecialidades() {
    this.especialidadesService.getEspecialidades().subscribe(data => {
      this.selectEspecialidades = data ? data : [];
      // console.log(this.selectCitas);
    });
  }

  getMedicos() {
    this.medicosService.getUsuarios().subscribe(data => {
      this.selectMedicos = data ? data : [];
      // console.log(this.selectMedicos);
    });
  }

  getEspMedicos() {
    this.espMedicosService.getEspecialidades_Medico().subscribe(data => {
      this.espMedicoList = data ? data : [];
      // console.log(data);
    });
  }

  insertEspMedico(espMedico: any) {
    const fecha = new Date();
    //creamos el array de datos para enviar
    this.nuevaAsignacion = {
      idUsuario: espMedico.idUsuario,
      idEspecialidad: espMedico.idEspecialidad,
      fecha: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`
    }
    //validamos para insertar
    if (this.formAsignaciones.valid) {
      this.espMedicosService.insertEspecialidades_Medico(this.nuevaAsignacion).subscribe(() => {
        this.alerta('Excelente', 'Registro Insertado Correctamente');
        this.formAsignaciones.reset();
        this.getEspMedicos()
      });
    } else {
      this.alerta('Error de Informacion', 'Verifique que los datos sean correctos');
    }
  }

  udpateEspMedico(espMed: any) {
    this.espMedicosService.updateEspecialidades_Medico(espMed, this.codigo).subscribe(() => {
      this.alerta('Excelente', 'Registro Actualizado Correctamente');
      this.formAsignaciones.reset();
      this.getEspMedicos();
    });
  }

  deleteEspMedico(codigo:number, medico: string, especialidad: string) {
    if (window.confirm(`Desea Eliminar la Asignacion de ${medico} en ${especialidad}?`)) {
      this.espMedicosService.deleteEspecialidades_Medico(codigo).subscribe(() => {
        this.getEspMedicos();
        this.alerta('Excelente', 'Registro Eliminado Correctamente');
      });
    }
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

  seleccionarEspMedico(espMed: any) {
    this.codigo = espMed.codigo_esp_med;
    this.formAsignaciones.setValue({
      idUsuario: espMed.idUsuario,
      idEspecialidad: espMed.idEspecialidad
    });
  }
}
