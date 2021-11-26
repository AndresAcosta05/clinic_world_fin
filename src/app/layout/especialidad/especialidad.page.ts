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
   this.getEspecilidad();
   
    });
  }else{
    this.alerta('Error','Verificar que los datos sean correctos');
  }

}
 actualizarEspecialidad(especialidad:any){
   this.especialidadService.Actualizar(especialidad,this.id).subscribe(()=>{
     this.alerta('Excelente','Registrado');
     this.formEspecialidad.reset();
     this.getEspecilidad();
     
   });
 }

 eliminarEspecialidad(codigo, nombre){
   console.log(codigo);
   
   if(window.confirm(`Desea eliminar a ${nombre} ?`)){
     this.especialidadService.Eliminar(codigo).subscribe(()=>{
    this.alerta('Warning','Registro eliminado correctamente')
    this.getEspecilidad();
     });
   }
 }
 seleccionar(especialidad:any){
   console.log(especialidad);
   this.id = especialidad.codigo_especialidad;
   this.formEspecialidad.setValue({
     nombre: especialidad.nombre,
     descripcion: especialidad.descripcion
   })
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
