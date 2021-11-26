import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesMedicosService {

  url = 'https://clinicworld.pythonanywhere.com/'; 

  constructor(
    private http: HttpClient
  ) { }

  getEspecialidades_Medico() {
    return this.http.get(`${this.url}getAllEsp_medico`);
  }

  insertEspecialidades_Medico(espMedico:any):Observable<any> {
    return this.http.post(`${this.url}addEsp_medico`, espMedico);    
  }

  updateEspecialidades_Medico(espMedico: any, codigo: number) {
    return this.http.put(`${this.url}/updateEsp_medico/` + codigo, espMedico);
  }

  deleteEspecialidades_Medico(documento: number) {
    return this.http.delete(`${this.url}deleteEsp_medico/${documento}`);
  } 
}
