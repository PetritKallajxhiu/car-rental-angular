import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './carServices';

@Injectable({
  providedIn: 'root'
})
export class CommentServices {
  private baseUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) {
  }

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveCommentRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Comment {
  id: number;
  name: string;
  photo: string;
  content: string;
  rate: number;
  createdAt: Date;
  carId: number;
  car: Car;
}

export interface SaveCommentRequest {
  id: number;
  name: string;
  photo: string;
  content: string;
  rate: number;
  carId: number;
  car: Car;
}
