import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BrandServices {
  private baseUrl = 'http://localhost:8080/api/brands';

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.baseUrl}/${id}`);
  }

  save(request: Brand): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Brand {
  id: number;
  name: string;
  createdAt: Date;
}
