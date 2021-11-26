import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiposUsuariosService {

  url = 'https://clinicworld.pythonanywhere.com/'; 


  constructor(
    private http: HttpClient
  ) { }

  getAllTipoUsuarios() {
    return this.http.get(`${this.url}getAlltipo`);
  }

  Insertar(tipo_usuarios: any): Observable<any> {
    return this.http.post(`${this.url}addTipo`, tipo_usuarios);
  }

  Actualizar(codigo: any, tipo_usuarios: any) {
    return this.http.put(`${this.url}/updateTipo/` + codigo, tipo_usuarios);
  }

  Eliminar(id: any) {
    return this.http.delete(`${this.url}deleteTipo/${id}`);
  } 
}


