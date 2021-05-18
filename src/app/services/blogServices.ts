import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogServices {
  private baseUrl = 'http://localhost:8080/api/blogs';

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}/${id}`);
  }

  save(request: Blog): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Blog {
  id: number;
  title: String;
  content: String;
  createdAt: Date;
  author: String;
  photo: String;
}
