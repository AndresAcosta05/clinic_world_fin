import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://clinicworld.pythonanywhere.com/'; 

  constructor(
    private http: HttpClient
  ) {  }

  verificarUsuario(usuario: any): Observable<any> {
    console.log(`${this.url}loggin`);
    return this.http.post(`${this.url}loggin`, usuario);
  }
}
