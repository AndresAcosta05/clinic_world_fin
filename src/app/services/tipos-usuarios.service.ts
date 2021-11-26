import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiposUsuariosService {

  url = "http://127.0.0.1:3000/";


  constructor(
    private http: HttpClient
  ) { }

  getAllTipoUsuarios() {
    return this.http.get(`${this.url}getAlltipo`);
  }

  Insertar(tipo_usuarios: any): Observable<any> {
    return this.http.post(`${this.url}addTipo`, tipo_usuarios);
  }

  Actualizar(nombre: any, descripcion: any) {
    return this.http.put(`${this.url}/updateTipo/` + descripcion, nombre);
  }

  Eliminar(id: any) {
    return this.http.delete(`${this.url}deleteTipo/${id}`);
  } 
}


