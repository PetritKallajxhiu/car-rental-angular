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
}

export interface Brand {
  id: number;
  name: string;
  createdAt: Date;
}
