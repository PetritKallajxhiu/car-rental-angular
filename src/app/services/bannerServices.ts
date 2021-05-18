import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = 'http://localhost:8080/api/banners';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Banner> {
    return this.http.get<Banner>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveBannerRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Banner {
  id: number;
  name: string;
  photo: string;
  createdAt: Date;
}

export interface SaveBannerRequest {
  id: number;
  name: string;
  photo: string;
}
