import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
