import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCotizacionesService {
  cotizacionesURL: string;
  lastUpdateURL: string;

  constructor(private http: HttpClient) {
    this.cotizacionesURL = 'https://conversor-dolar-api.onrender.com/api';
    this.lastUpdateURL =
      'https://conversor-dolar-api.onrender.com/api/lastupdate';
  }

  getCotizaciones(): Observable<any> {
    return this.http.get<any>(this.cotizacionesURL, { withCredentials: true });
  }

  getLastUpdate(): Observable<any> {
    return this.http.get<any>(this.lastUpdateURL, { withCredentials: true });
  }
}
