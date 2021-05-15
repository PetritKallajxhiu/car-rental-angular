import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car, CarServices} from '../../../services/carServices';
import {Router} from '@angular/router';
import {ReservationServices, SaveReservationRequest} from '../../../services/reservationServices';

@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {
  reservationForm = new FormGroup({});
  cars: Car[] = [];

  constructor(private carService: CarServices, private reservationService: ReservationServices,
              private router: Router) {
  }

//  Kur kemi dhe Edit
//   if (this.activeRoute.snapshot.params.id) {
//   this.reservationService.getById(this.activeRoute.snapshot.params.id)
// .subscribe((reservation) => {
//   this.reservationForm = this.createReservationForm(reservation);
// });
// } else {this.reservationForm = this.createReservationForm({} as Reservation); }

  ngOnInit(): void {
    this.reservationForm = this.createReservationForm({
      car: {}
    } as SaveReservationRequest);

    this.carService.getAll().subscribe(data => {
      this.cars = data;
    });
  }

  createReservationForm(request: SaveReservationRequest): FormGroup {
    return new FormGroup({
      id: new FormControl(request.id),
      clientName: new FormControl(request.clientName, Validators.required),
      clientEmail: new FormControl(request.clientEmail, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(request.phoneNumber, Validators.required),
      pickUpLocation: new FormControl(request.pickUpLocation, Validators.required),
      pickUpDate: new FormControl(request.pickUpDate, Validators.required),
      pickUpTime: new FormControl(request.pickUpTime, Validators.required),
      finalPrice: new FormControl(request.finalPrice, [Validators.required, Validators.min(1)]),
      carId: new FormControl(request.carId, Validators.required),
      comment: new FormControl(request.comment)
    });
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }

  updatePrice(event: any): void {
    const carSelectedId = event.currentTarget.value;
    this.carService.getById(carSelectedId).subscribe(response => {
      this.reservationForm.patchValue({
        finalPrice: response.price,
      });
    });
  }

}
