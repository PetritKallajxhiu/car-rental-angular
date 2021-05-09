import {Component, OnInit} from '@angular/core';
import {Car, CarServices} from '../../services/carServices';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars: Car[] = [];


  constructor(private carservice: CarServices) {
  }

  ngOnInit(): void {
    this.updateCars();
  }

  updateCars(): void {
    this.carservice.getAll().subscribe(response => {
      this.cars = response;
    });
  }

  onDeleteCar(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.carservice.delete(id).subscribe(response => {
        this.updateCars();
      });
    }
  }
}
