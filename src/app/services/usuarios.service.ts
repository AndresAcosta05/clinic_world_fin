import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://127.0.0.1:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllUsuarios() {
    return this.http.get(`${this.url}getAllusuario`);
  }

  Insertar(usuario: any): Observable<any> {
    return this.http.post(`${this.url}addUsuario`, usuario);
  }

  Actualizar(usuario: any, documento: number) {
    return this.http.put(`${this.url}/updateCliente/` + documento, cliente);
  }

  Eliminar(documento: number) {
    return this.http.delete(`${this.url}deleteCliente/${documento}`);
  } 
}


