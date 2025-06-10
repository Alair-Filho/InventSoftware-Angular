import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipamento } from '../models/equipamento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private apiUrl = 'https://localhost:7201/api/Equipamentos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Equipamento[]>{
    return this.http.get<Equipamento[]>(this.apiUrl);
  }

  getPorId(id: string): Observable<Equipamento> {
    return this.http.get<Equipamento>(`${this.apiUrl}/${id}`);
  }

  criar(equipamento: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.apiUrl, equipamento);
  }

  atualizar(id: string, equipamento: Equipamento): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, equipamento);
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
