import { Component, OnInit } from '@angular/core';
import {Reservation, ReservationServices} from '../../services/reservationServices';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation [] = [];


  constructor(private reservationservice: ReservationServices) {
  }

  ngOnInit(): void {
    this.updateReservations();
  }

  updateReservations(): void {
    this.reservationservice.getAll().subscribe(response => {
      this.reservations = response;
    });
  }

  onDeleteReservation(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.reservationservice.delete(id).subscribe(response => {
        this.updateReservations();
      });
    }
  }
}
