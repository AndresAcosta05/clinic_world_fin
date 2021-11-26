import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.page.html',
  styleUrls: ['./especialidad.page.scss'],
})
export class EspecialidadPage implements OnInit {

  nombre: string = "Formulario Especialidades";
  especialidadList: any=[];
  formEspecialidad: FormGroup;
  id: number;

  constructor(private especialidadService: EspecialidadesService,
    private formBuilder: FormBuilder,
    public alertController : AlertController
    ) {
      this.formEspecialidad = this.formBuilder.group({
        nombre: ['',Validators.required],
        descripcion: ['',Validators.required]
      })
     }

  ngOnInit() {
  this.getEspecilidad();
  }
  
getEspecilidad(){
  this.especialidadService.getEspecialidades().subscribe(data =>{
    this.especialidadList = data ? data : [];
  });
}


insertEspecialidad(especialidad){
  //validamos from
  if(this.formEspecialidad.valid){
    this.especialidadService.Insertar(especialidad).subscribe(() =>{
   this.formEspecialidad.reset();
   this.alerta('Excelente','Registro insertado')
   
    });
  }else{
    this.alerta('Error','Verificar que los datos sean correctos');
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


}
