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

  getUsuarios() {
    return this.http.get(`${this.url}getAllusuarios`);
  }

  insertUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}addusuarios`, usuario);
  }

  updateUsuarios(usuario: any, documento: number) {
    return this.http.put(`${this.url}/updateUsuarios/` + documento, usuario);
  }

  deleteUsuario(documento: number) {
    return this.http.delete(`${this.url}deleteUsuarios/${documento}`);
  }
}