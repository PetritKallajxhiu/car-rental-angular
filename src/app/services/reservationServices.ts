import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from './clientServices';
import {Car} from './carServices';

@Injectable({
  providedIn: 'root'
})

export class ReservationServices {
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
  client: Client;
  clientId: number;
  pickUpLocation: string;
  pickUpDate: Date;
  pickUpTime: string;
  finalPrice: number;
  car: Car;
  carId: number;
  comment: string;
  createdAt: Date;
}

export interface SaveReservationRequest {
  id: number;

  clientName: string;
  clientEmail: string;
  phoneNumber: string;

  pickUpLocation: string;
  pickUpDate: Date;
  pickUpTime: string;
  finalPrice: number;
  comment: string;

  car: Car;
  carId: number;
}



