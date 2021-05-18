import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from './carServices';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  private baseUrl = 'http://localhost:8080/api/comments';

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

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
  content: string;
  photo: string;
  rate: number;
  carId: number;
  car: Car;
  createdAt: Date;
}

export interface SaveCommentRequest {
  id: number;
  name: string;
  content: string;
  photo: string;
  rate: number;
  carId: number;
  car: Car;
}
