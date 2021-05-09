import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Time} from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/reservations';

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveReservationRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Reservation {
  id: number;

  pickUpLocation: string;
  pickUpDate: Date;
  pickUpTime: Time;
  finalPrice: number;
  comment: string;
  createdAt: Date;
  carId: number;
  clientId: number;
}

export interface SaveReservationRequest {
  id: number;


  pickUpLocation: string;
  pickUpDate: Date;
  pickUpTime: Time;
  finalPrice: number;
  comment: string;
  createdAt: Date;
  carId: number;
  clientId: number;
}


