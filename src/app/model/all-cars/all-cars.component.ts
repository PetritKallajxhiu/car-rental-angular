import {Component, OnInit} from '@angular/core';
import {Car, CarServices} from '../../services/carServices';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarServices) {
  }

  ngOnInit(): void {
    this.updateCars();
  }

  updateCars(): void {
    this.carService.getAll().subscribe(response => {
      this.cars = response;
    });
  }

  onDeleteCar(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.carService.delete(id).subscribe(response => {
        this.updateCars();
      });
    }
  }
}
