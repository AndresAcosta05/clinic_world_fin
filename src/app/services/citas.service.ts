import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = 'http://127.0.0.1:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getAllCitas() {
    return this.http.get(`${this.url}getAllCitas`);
  }

  insertCita(cita: any): Observable<any> {
    return this.http.post(`${this.url}addCitas`, cita);
  }

  updateCita(cita: any, codigo: any) {
    return this.http.put(`${this.url}/updateCitas/` + codigo, cita);
  }

  deleteCita(codigo: any) {
    return this.http.delete(`${this.url}deleteCitas/${codigo}`);
  }
}
