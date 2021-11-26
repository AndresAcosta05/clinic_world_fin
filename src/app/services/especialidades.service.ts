import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  url = 'http://127.0.0.1:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getEspecialidades() {
    return this.http.get(`${this.url}getAllespecialidad`);
  }
  Insertar(especialidad:any): Observable<any>{
    return this.http.post(`${this.url}addEspecialidad`, especialidad);
  }
  Actualizar (especialidad:any,id: number): Observable<any>{
    return this.http.put(`${this.url}/updateEspecialidad/` + id, especialidad);
  }
  Eliminar(id :number){
    return this.http.delete(`${this.url}/deleteEspecialidad/${id}` );
  }
}
