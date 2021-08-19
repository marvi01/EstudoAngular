import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { Lembrete } from '../interfaces/lembrete';
@Injectable({
  providedIn: 'root'
})
export class LembretesService {

  constructor(private http: HttpClient) {

  }
  getListaLembrete(): Observable<Lembrete[]> {
    const url = `http://localhost:8000/api/Lembrete`;
    return this.http.get<Lembrete[]>(url)
  }
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/Lembrete/${id}`;
    return this.http.get<Lembrete>(url)
  }
  addLembrete(lembrete : Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/Lembrete/`;
    return this.http.post<Lembrete>(url,lembrete);
  }
  atualizaLembrete(lembrete : Lembrete): Observable<Lembrete> {
    console.log(lembrete);
    const url = `${environment.lembreteApiUrl}/Lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url,lembrete);
  }
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/Lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}