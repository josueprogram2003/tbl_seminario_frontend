import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Seminario } from '../seminario/modelo/seminario';

@Injectable({
  providedIn: 'root',
})
export class SeminarioService {
  urlSeminario: string = 'http://localhost:9090/api/seminario/all';
  urlinsertarSeminario: string = 'http://localhost:9090/api/seminario/new';

  urlBuscar: string = 'http://localhost:9090/api/seminario/search';

  urleliminar: string = 'http://localhost:9090/api/seminario/delete/';

  urleditar: string = 'http://localhost:9090/api/seminario/update/';

  urlAsistencia: string = 'http://localhost:9090/api/asistencia/all';
  constructor(private http: HttpClient) {}

  getSeminario(): Observable<Seminario[]> {
    return this.http.get<Seminario[]>(this.urlSeminario);
  }

  insertarSeminario(obj: Seminario) {
    // console.log(obj);
    return this.http.post(this.urlinsertarSeminario, obj);
  }
  buscarSeminario(id: number): Observable<Seminario> {
    return this.http.get<Seminario>(`${this.urlBuscar}/${id}`);
  }

  eiminarSeminario(id: number) {
    console.log(id);
    return this.http.delete(`${this.urleliminar}${id}`);
  }

  updateSeminario(id: number, obj: Seminario) {
    //    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urleditar}${id}`, obj);
  }

  listarAsistencia(): Observable<any> {
    return this.http.get<any>(this.urlAsistencia);
  }
}
