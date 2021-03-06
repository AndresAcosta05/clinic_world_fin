import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'https://clinicworld.pythonanywhere.com/'; 

  constructor(
    private http: HttpClient
  ) { }

  getAllClientes() {
    return this.http.get(`${this.url}getAllcliente`);
  }

  Insertar(cliente: any): Observable<any> {
    return this.http.post(`${this.url}addCLiente`, cliente);
  }

  Actualizar(cliente: any, documento: number) {
    return this.http.put(`${this.url}/updateCliente/` + documento, cliente);
  }

  Eliminar(documento: number) {
    return this.http.delete(`${this.url}deleteCliente/${documento}`);
  } 
}
