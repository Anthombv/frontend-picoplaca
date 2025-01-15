import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicoPlacaService {
  private readonly baseUrl = 'https://backend-picoplaca.onrender.com/api/picoplaca/verificar';
  constructor(private http: HttpClient) {}

  verificar(data: { placa: string; timestamp: number; }): Observable<string> {
    console.log(data)
    // Realizar la solicitud HTTP POST enviando el cuerpo JSON
    return this.http.post<string>(this.baseUrl, data, { responseType: 'text' as 'json' });
  }
}
