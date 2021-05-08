import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car, CarService, FuelType} from '../../../services/carservice';
import {ActivatedRoute, Router} from '@angular/router';
import {Brand, BrandService} from '../../../services/brandService';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carForm = new FormGroup({});

  brands: Brand[] = [];

  fuelTypes: FuelTypeViewModel[] = [
    {id: FuelType.Diesel, type: 'Diesel'},
    {id: FuelType.Electric, type: 'Electric'},
    {id: FuelType.Gasoline, type: 'Gasoline'}
  ];

  constructor(private carService: CarService, private router: Router,
              private activeRoute: ActivatedRoute, private brandService: BrandService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.carService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((car) => {
          this.carForm = this.createCarForm(car);
        });
    } else {
      this.carForm = this.createCarForm({} as Car);
    }
    this.brandService.getAll().subscribe(data => {
      this.brands = data;
    });
  }

  createCarForm(car: Car): FormGroup {
    return new FormGroup({
      id: new FormControl(car.id),
      name: new FormControl(car.name),
      passengers: new FormControl(car.passengers),
      photo: new FormControl(car.photo),
      brandId: new FormControl(car.brandId),
      fuelType: new FormControl(car.fuelType)
    });
  }

  onSubmit(): void {
    this.carService.save(this.carForm.value)
      .subscribe(response => {
        return this.router.navigate(['/cars']);
      });
  }
}

interface FuelTypeViewModel {
  id: number;
  type: string;
}
