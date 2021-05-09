import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarServices {
  private baseUrl = 'http://localhost:8080/api/cars';

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveCarRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Car {
  id: number;
  name: string;
  passengers: number;
  doors: number;
  engine: string;
  fuelType: FuelType;
  photo: string;
  price: number;
  location: string;
  featured: boolean;
  brandId: number;
}

export interface SaveCarRequest {
  id: number;
  name: string;
  passengers: number;
  doors: number;
  engine: string;
  fuelType: FuelType;
  photo: string;
  price: number;
  location: string;
  featured: boolean;
  brandId: number;
}

export enum FuelType {
  Gasoline,
  Diesel,
  Electric
}
